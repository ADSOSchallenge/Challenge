import { useEffect } from "react";

const API = import.meta.env.VITE_API_URL;
export default function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      pergunta: formData.get("pergunta"),
    };

    try {
      const resp = await fetch(`${API}/paciente/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const erro = await resp.text();
        alert(`Erro ao enviar mensagem: ${erro}`);
        return;
      }

      alert("Mensagem enviada com sucesso!");
      event.currentTarget.reset(); 
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <main>
      <div>
        <section>
          <h1>Formulário para contato</h1>
          <p>
            Está com alguma dúvida específica? Entre em contato com a gente ou
            preencha o formulário abaixo para que possamos retornar o mais breve possível.
          </p>
        </section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais:</legend>

            <section>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome..."
                required
              />
            </section>

            <section>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail..."
                required
                maxLength={50}
              />
            </section>

            <section>
              <label htmlFor="pergunta">Dúvida:</label>
              <input
                type="text"
                id="pergunta"
                name="pergunta"
                placeholder="Digite sua dúvida..."
                required
              />
            </section>

            <section>
              <button type="submit" aria-label="Enviar formulário de contato">
                Enviar!
              </button>
            </section>
          </fieldset>
        </form>

        <section>
          <p>
            Quer falar diretamente com o ADSOS? Mande um e-mail para{" "}
            <a href="mailto:adsoschallenge@gmail.com">adsoschallenge@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
