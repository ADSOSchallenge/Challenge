import { useState } from "react";
import Formulario from "../../components/Formulario/Formulario";

const API = import.meta.env.VITE_API_URL;

export default function Feedback() {
  const [valores, setValores] = useState({
    nome: "",
    cpf: "",
    nota: "",
    comentario: "",
  });

  const campos = [
    { label: "Nome", name: "nome", placeholder: "Digite seu nome...", required: true },
    { label: "CPF", name: "cpf", placeholder: "Digite seu CPF...", required: true, type: "text" },
    { label: "Nota", name: "nota", placeholder: "De 0 a 10", required: true, type: "number" },
    { label: "Comentário", name: "comentario", placeholder: "Digite seu comentário..." },
  ];

  const handleSubmit = async (dados: Record<string, string>) => {
    try {
      const resp = await fetch(`${API}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro ao enviar feedback: ${erro}`);
        return;
      }

      alert(" Obrigado pelo seu feedback!");
      setValores({
        nome: "",
        cpf: "",
        nota: "",
        comentario: "",
      });
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      alert("⚠️ Ocorreu um erro ao enviar seu feedback. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <div>
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
      </div>
    </main>
  );
}
