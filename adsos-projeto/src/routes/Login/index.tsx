import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

const API = import.meta.env.VITE_API_URL;

export default function Login() {
  const navigate = useNavigate();

  const [valores, setValores] = useState<{ cpf: string; senha: string }>({
    cpf: "",
    senha: "",
  });

  const handleSubmit = async (dados: { cpf: string; senha: string }) => {
    try {
      const resp = await fetch(`${API}/paciente/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro no login: ${erro}`);
        return;
      }

      const data: Usuario = await resp.json();
      alert(`Bem-vindo(a), ${data.nome || "usuário"}!`);
      localStorage.setItem("usuarioLogado", JSON.stringify(data));

      navigate("/app");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("⚠️ Não foi possível realizar o login. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <Formulario
        titulo="Entrar na sua conta"
        campos={[
          {
            label: "CPF",
            name: "cpf",
            placeholder: "Digite seu CPF",
            required: true,
          },
          {
            label: "Senha",
            name: "senha",
            type: "password",
            placeholder: "Digite sua senha",
            required: true,
          },
        ]}
        valores={valores}
        setValores={setValores}
        botaoTexto="Entrar"
        onSubmit={handleSubmit}
      />

      <p>
        Ainda não tem uma conta?{" "}
        <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </main>
  );
}
