import { Link } from "react-router-dom";
import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nota: "",
    comentario: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback enviado:", formData);
    alert("Obrigado pelo seu feedback!");

    setFormData({
      nome: "",
      cpf: "",
      nota: "",
      comentario: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <div className="flex justify-between items-center">
          <h1 className="header-title">Deixe um feedback</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-label="Voltar ao menu de login">← Voltar</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex-1 p-4">
        <section className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Avaliação de satisfação</h2>
          <p className="text-black text-left mb-6">
            Sua opinião é muito importante para a evolução do nosso sistema. Deixe aqui seu comentário e sua nota para que possamos melhorar continuamente.
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <fieldset className="border p-4 rounded border-gray-300">
              <legend className="text-lg font-semibold px-2">Formulário de avaliação:</legend>

              <div className="mb-4">
                <label htmlFor="idNome" className="block text-black font-medium mb-2">
                  Nome:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  placeholder="Digite seu nome..."
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idCpf" className="block text-black font-medium mb-2">
                  CPF:
                </label>
                <input
                  type="text"
                  name="cpf"
                  id="idCpf"
                  placeholder="Digite seu CPF..."
                  maxLength={11}
                  pattern="\d{11}"
                  required
                  value={formData.cpf}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idNota" className="block text-black font-medium mb-2">
                  Nota:
                </label>
                <input
                  type="number"
                  name="nota"
                  id="idNota"
                  placeholder="Deixe sua nota de 0 a 10..."
                  min="0"
                  max="10"
                  required
                  value={formData.nota}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="idCom" className="block text-black font-medium mb-2">
                  Comentário:
                </label>
                <input
                  type="text"
                  id="idCom"
                  name="comentario"
                  placeholder="Digite seu comentário..."
                  value={formData.comentario}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <button 
                  type="submit" 
                  className="form-button"
                  aria-label="Botão de enviar feedback"
                >
                  Avaliar
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>

      <footer className="footer-bg">
        <p className="footer-text">
          Produzido por ADSOS - Copyright 2025 © - Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}