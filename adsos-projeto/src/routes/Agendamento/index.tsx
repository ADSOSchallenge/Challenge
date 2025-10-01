import { Link } from "react-router-dom";
import { useState } from "react";

type Medico = {
  id: string;
  nome: string;
  especialidade: string;
};

type FormData = {
  cpfPaciente: string;
  cpfMedico: string;
  dataConsulta: string;
  horaConsulta: string;
  especializacao: string;
};

export default function Agendamento() {
  const [medicos] = useState<Medico[]>([
    { id: "1", nome: "Dra. Giovanna Bardella", especialidade: "Cardiologia" },
    { id: "2", nome: "Dra. Amandha Yumi", especialidade: "Dermatologia" },
    { id: "3", nome: "Dr. Erick Takeshi", especialidade: "Ortopedia" },
    { id: "4", nome: "Dr. Alexandre Carlos", especialidade: "Pediatria" },
  ]);

  const [formData, setFormData] = useState<FormData>({
    cpfPaciente: "",
    cpfMedico: "",
    dataConsulta: "",
    horaConsulta: "",
    especializacao: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const consultasExistentes: unknown[] = JSON.parse(localStorage.getItem("consultas") || "[]");

    
    const novaConsulta = {
      id: consultasExistentes.length + 1,
      data: formData.dataConsulta,
      hora: formData.horaConsulta,
      medico: medicos.find(m => m.id === formData.cpfMedico)?.nome || "",
      especialidade: formData.especializacao,
    };
    localStorage.setItem("consultas", JSON.stringify([...consultasExistentes, novaConsulta]));

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
          <h1 className="header-title">Agendar Teleconsulta</h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/app" className="nav-link">← Voltar</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex-1 p-4">
        <section className="max-w-2xl mx-auto">
          <h2 className="section-title mb-4">Preencha os dados da consulta</h2>
          <form onSubmit={handleSubmit} className="form-container">
            <fieldset className="border p-4 rounded border-gray-300">
              <legend className="text-lg font-semibold px-2">Dados do Agendamento</legend>

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

              <button 
                type="submit" 
                className="form-button"
                aria-label="Agendar consulta"
              >
                Agendar
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}
