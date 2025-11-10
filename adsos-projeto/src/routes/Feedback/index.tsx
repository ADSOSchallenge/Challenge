import { useState } from "react";
import Formulario from "../../components/Formulario/Formulario";

const API = import.meta.env.VITE_API_URL;

export default function Feedback() {
  const [valores, setValores] = useState({
    nota: "",
    comentario: "",
  });

  const campos = [
    { label: "Nota (0 a 10)", name: "nota", type: "number", placeholder: "Digite uma nota de 0 a 10", required: true },
    { label: "Comentário", name: "comentario", placeholder: "Digite seu comentário..." },
  ];

  const handleSubmit = async (dados: Record<string, string>) => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "{}");
    if (!usuarioLogado?.id) {
      alert("Você precisa estar logado para enviar feedback.");
      return;
    }

    let tipoAvaliacao = "NEUTRO";
    const notaNum = Number(dados.nota);
    if (notaNum >= 8) tipoAvaliacao = "POSITIVO";
    else if (notaNum <= 3) tipoAvaliacao = "NEGATIVO";

    const feedback = {
      tipoAvaliacao,
      comentario: dados.comentario || "",
    };

    try {
      const resp = await fetch(`${API}/feedback/paciente/${usuarioLogado.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro ao enviar feedback: ${erro}`);
        return;
      }

      alert("Obrigado pelo seu feedback!");
      setValores({ nota: "", comentario: "" });
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      alert("Ocorreu um erro ao enviar seu feedback. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <section>
        <h1>Avaliação de satisfação</h1>
        <p>
          Sua opinião é muito importante para a evolução do nosso sistema.
          Deixe aqui seu comentário e sua nota para que possamos melhorar continuamente.
        </p>

        <Formulario
          titulo="Formulário de avaliação"
          campos={campos}
          valores={valores}
          setValores={setValores}
          onSubmit={handleSubmit}
          botaoTexto="Avaliar"
        />
      </section>
    </main>
  );
}
