import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

const API = import.meta.env.VITE_API_URL; 

export default function Cadastro() {
  const navigate = useNavigate();

  const [valores, setValores] = useState<Usuario>({
    id: Date.now().toString(),
    nome: "",
    celular: "",
    cpf: "",
    email: "",
    senha: "",
    tipoUsuario: "",
    sexo: "",
  });

  const handleSubmit = async (dados: Record<string, string>) => {
    try {
      const resp = await fetch(`${API}/usuario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro no cadastro: ${erro}`);
        return;
      }

      const data = await resp.json();
      alert("Cadastro realizado com sucesso!");
      localStorage.setItem("usuarioLogado", JSON.stringify(data));

      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Não foi possível realizar o cadastro. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <Formulario
        titulo="Cadastro de Usuário"
        campos={[
          { label: "Nome", name: "nome", placeholder: "Digite seu nome", required: true },
          { label: "Celular", name: "celular", placeholder: "Digite seu número de celular", required: true },
          { label: "CPF", name: "cpf", placeholder: "Digite seu CPF", required: true },
          { label: "Email", name: "email", type: "email", placeholder: "Digite seu email", required: true },
          { label: "Senha", name: "senha", type: "password", placeholder: "Digite sua senha", required: true },
          { 
            label: "Tipo de usuário", 
            name: "tipoUsuario", 
            type: "select", 
            options: [
              { value: "PACIENTE", label: "Paciente" },
              { value: "MEDICO", label: "Médico" }
            ],
            required: true,
          },
          { 
            label: "Sexo", 
            name: "sexo", 
            type: "select", 
            options: [
              { value: "FEMININO", label: "Feminino" },
              { value: "MASCULINO", label: "Masculino" }
            ],
            required: true,
          },
        ]}
        valores={valores}
        setValores={setValores}
        botaoTexto="Cadastrar"
        onSubmit={handleSubmit}
      />

      <p>
        Já tem uma conta? <Link to="/login">Faça Login</Link>
      </p>
    </main>
  );
}
