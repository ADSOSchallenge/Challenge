import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Usuario } from "../../types/Usuario";

export default function DeletarCadastro() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleDelete = () => {
    if (!confirm("Tem certeza que deseja excluir este cadastro?")) return;

    const usuariosSalvos = localStorage.getItem("usuarios");
    if (!usuariosSalvos) return;

    const lista: Usuario[] = JSON.parse(usuariosSalvos);
    const atualizados = lista.filter((u) => u.id !== id);
    localStorage.setItem("usuarios", JSON.stringify(atualizados));

    alert("Cadastro excluído com sucesso!");
    navigate("/cadastros");
  };

  return (
    <main>
      <h1>Excluir Cadastro</h1>
      <p>Tem certeza que deseja excluir este cadastro?</p>
      <button onClick={handleDelete}>Excluir</button>
      <button onClick={() => navigate("/cadastros")}>Cancelar</button>
    </main>
  );
}
