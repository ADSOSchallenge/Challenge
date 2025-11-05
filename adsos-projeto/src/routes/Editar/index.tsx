import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

export default function EditarCadastros() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [valores, setValores] = useState<Usuario>({
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    tipo: "",
  });

  useEffect(() => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (usuariosSalvos) {
      const lista: Usuario[] = JSON.parse(usuariosSalvos);
      const usuario = lista.find((u) => u.id === id);
      if (usuario) setValores(usuario);
    }
  }, [id]);

  const handleSubmit = (dados: Record<string, string>) => {
    const usuariosSalvos = localStorage.getItem("usuarios");
    if (!usuariosSalvos) return;

    const lista: Usuario[] = JSON.parse(usuariosSalvos);
    const atualizados = lista.map((u) => (u.id === id ? dados : u));

    localStorage.setItem("usuarios", JSON.stringify(atualizados));
    alert("Cadastro atualizado com sucesso!");
    navigate("/cadastros");
  };

  return (
    <main>
      <h1>Editar Cadastro</h1>
      <Formulario
        titulo="Atualize os dados do cadastro"
        campos={[
          { label: "Nome", name: "nome", placeholder: "Digite o nome", required: true },
          { label: "CPF", name: "cpf", placeholder: "Digite o CPF", required: true },
          { label: "Email", name: "email", type: "email", placeholder: "Digite o email", required: true },
          { label: "Senha", name: "senha", type: "password", placeholder: "Digite a senha", required: true },
          { label: "Tipo", name: "tipo", type: "select", placeholder: "medico / paciente", required: true },
        ]}
        valores={valores}
        setValores={setValores}
        botaoTexto="Atualizar"
        onSubmit={handleSubmit}
      />
    </main>
  );
}
