import { Link } from "react-router-dom";
import { useState } from "react";

type Medico = {
  id: string;
  nome: string;
  especialidade: string;
};

export default function Agendamento() {
  const [medicos] = useState<Medico[]>([
    { id: "1", nome: "Dra. Giovanna Bardella", especialidade: "Cardiologia" },
    { id: "2", nome: "Dra. Amandha Yumi", especialidade: "Dermatologia" },
    { id: "3", nome: "Dr. Erick Takeshi", especialidade: "Ortopedia" },
    { id: "4", nome: "Dr. Alexandre Carlos", especialidade: "Pediatria" },
  ]);

  const [formData, setFormData] = useState({
    cpfPaciente: "",
    cpfMedico: "",
    dataConsulta: "",
    horaConsulta: "",
    especializacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do agendamento:", formData);
    alert("Consulta agendada com sucesso!");

    setFormData({
      cpfPaciente: "",
      cpfMedico: "",
      dataConsulta: "",
      horaConsulta: "",
      especializacao: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <div className="flex justify-between items-center">
          <h1 className="header-title">Agendar teleconsulta</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">← Voltar</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex-1 p-4">
        <section className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Agendar teleconsulta</h2>
          <p className="text-black text-left mb-6">
            Para agendar sua teleconsulta, é necessário completar os dados do formulário.
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <fieldset className="border p-4 rounded border-gray-300">
              <legend className="text-lg font-semibold px-2">Dados:</legend>

              <div className="mb-4">
                <label htmlFor="idCpfPac" className="block text-black font-medium mb-2">
                  CPF do paciente:
                </label>
                <input
                  type="text"
                  name="cpfPaciente"
                  id="idCpfPac"
                  placeholder="Digite o CPF do paciente..."
                  required
                  pattern="\d{11}"
                  maxLength={11}
                  value={formData.cpfPaciente}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idSelectMedicos" className="block text-black font-medium mb-2">
                  Médico:
                </label>
                <select
                  name="cpfMedico"
                  id="idSelectMedicos"
                  required
                  value={formData.cpfMedico}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Selecione um médico...</option>
                  {medicos.map(medico => (
                    <option key={medico.id} value={medico.id}>
                      {medico.nome} - {medico.especialidade}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="idData" className="block text-black font-medium mb-2">
                  Data:
                </label>
                <input
                  type="date"
                  name="dataConsulta"
                  id="idData"
                  required
                  value={formData.dataConsulta}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="idHora" className="block text-black font-medium mb-2">
                  Horário:
                </label>
                <input
                  type="time"
                  name="horaConsulta"
                  id="idHora"
                  required
                  value={formData.horaConsulta}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="idEsp" className="block text-black font-medium mb-2">
                  Especialização:
                </label>
                <input
                  type="text"
                  name="especializacao"
                  id="idEsp"
                  placeholder="Digite a especialização da consulta..."
                  required
                  value={formData.especializacao}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <button 
                  type="submit" 
                  className="form-button"
                  aria-label="Botão de agendar"
                >
                  Agendar
                </button>
              </div>
            </fieldset>
          </form>
        </section>
      </div>

    </main>
  );
}