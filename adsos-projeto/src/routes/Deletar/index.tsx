import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function DeletarCadastro() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleDelete = async () => {
    if (!confirm("Tem certeza que deseja excluir este cadastro?")) return;

    try {
      const resp = await fetch(`${API}/usuario/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro ao excluir cadastro: ${erro}`);
        return;
      }

      alert("Cadastro excluído com sucesso!");
      navigate("/cadastros");
    } catch (error) {
      console.error("Erro ao excluir cadastro:", error);
      alert("Ocorreu um erro ao tentar excluir o cadastro. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <h1>Excluir Cadastro</h1>
      <p>Tem certeza que deseja excluir este cadastro?</p>
      <button onClick={handleDelete} className="botao-excluir">
        Sim, quero excluir!
      </button>
    </main>
  );
}
