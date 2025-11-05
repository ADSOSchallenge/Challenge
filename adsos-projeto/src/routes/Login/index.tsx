import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

export default function Login() {
  const navigate = useNavigate();
  const [valores, setValores] = useState<{ cpf: string; senha: string }>({
    cpf: "",
    senha: "",
  });

  const handleSubmit = (dados: { cpf: string; senha: string }) => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (!usuariosSalvos) {
      alert("Nenhum usuário cadastrado.");
      return;
    }

    const lista: Usuario[] = JSON.parse(usuariosSalvos);
    const usuario = lista.find(
      (u) => u.cpf === dados.cpf && u.senha === dados.senha
    );

    if (usuario) {
      alert(`Bem-vindo(a), ${usuario.nome}!`);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      navigate("/app"); 
    } else {
      alert("CPF ou senha incorretos.");
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <Formulario
        titulo="Entrar na sua conta"
        campos={[
          { label: "CPF", name: "cpf", placeholder: "Digite seu CPF", required: true },
          { label: "Senha", name: "senha", type: "password", placeholder: "Digite sua senha", required: true },
        ]}
        valores={valores}
        setValores={setValores}
        botaoTexto="Entrar"
        onSubmit={handleSubmit}
      />

      <p>
        Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </main>
  );
}
