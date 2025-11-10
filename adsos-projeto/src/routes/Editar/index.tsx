import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import type { Usuario } from "../../types/Usuario";

const api = import.meta.env.VITE_API_URL;

export default function EditarCadastros() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [valores, setValores] = useState<Usuario>({
    id: "",
    nome: "",
    celular: "",
    cpf: "",
    email: "",
    senha: "",
    tipoUsuario: "",
    sexo: "",
  });

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const resp = await fetch(`${api}/usuario/${id}`);
        if (!resp.ok) throw new Error("Erro ao buscar usuário");
        const dados = await resp.json();
        setValores(dados);
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar dados do usuário.");
      }
    }

    if (id) carregarUsuario();
  }, [id]);

  const handleSubmit = async (dados: Record<string, string>) => {
    try {
      const resp = await fetch(`${api}/usuario/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resp.ok) throw new Error("Erro ao atualizar cadastro");

      alert("Cadastro atualizado com sucesso!");
      navigate("/cadastros");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar as alterações.");
    }
  };

  return (
    <main>
      <h1>Editar Cadastro</h1>
      <Formulario
        titulo="Atualize os dados do cadastro"
        campos={[
          { label: "Nome", name: "nome", placeholder: "Digite o nome", required: true },
          { label: "Celular", name: "celular", placeholder: "Digite o número de celular", required: true },
          { label: "CPF", name: "cpf", placeholder: "Digite o CPF", required: true },
          { label: "Email", name: "email", type: "email", placeholder: "Digite o email", required: true },
          { label: "Senha", name: "senha", type: "password", placeholder: "Digite a senha", required: true },
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
        botaoTexto="Atualizar"
        onSubmit={handleSubmit}
      />
    </main>
  );
}
