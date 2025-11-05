import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

export default function Cadastro() {
  const navigate = useNavigate();
  const [valores, setValores] = useState<Usuario>({
    id: Date.now().toString(),
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    tipo: "",
  });

  const handleSubmit = (dados: Record<string, string>) => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    const lista: Usuario[] = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    if (lista.find((u) => u.email === dados.email)) {
      alert("E-mail já cadastrado!");
      return;
    }

    lista.push(dados as Usuario);
    localStorage.setItem("usuarios", JSON.stringify(lista));
    localStorage.setItem("usuarioLogado", JSON.stringify(dados));

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <Formulario
        titulo="Cadastro de Usuário"
        campos={[
          { label: "Nome", name: "nome", placeholder: "Digite seu nome", required: true },
          { label: "CPF", name: "cpf", placeholder: "Digite seu CPF", required: true },
          { label: "Email", name: "email", type: "email", placeholder: "Digite seu email", required: true },
          { label: "Senha", name: "senha", type: "password", placeholder: "Digite sua senha", required: true },
          { label: "Tipo", name: "tipo", type: "select", placeholder: "medico / paciente", required: true },
        ]}
        valores={valores}
        setValores={setValores}
        botaoTexto="Cadastrar"
        onSubmit={handleSubmit}
      />

      <p>Já tem uma conta? <Link to="/login">Faça Login</Link></p>
    </main>
  );
}
