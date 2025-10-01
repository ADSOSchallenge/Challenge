import { Link } from "react-router-dom";
import { useState } from "react";

type Consulta = {
  id: number;
  data: string;
  hora: string;
  medico: string;
  especialidade: string;
};

export default function Agenda() {
  const [consultas, setConsultas] = useState<Consulta[]>([
    { id: 1, data: "2025-01-15", hora: "14:00", medico: "Dr. João Silva", especialidade: "Cardiologia" },
    { id: 2, data: "2025-01-20", hora: "10:30", medico: "Dra. Maria Santos", especialidade: "Dermatologia" },
    { id: 3, data: "2025-01-25", hora: "16:15", medico: "Dr. Pedro Costa", especialidade: "Ortopedia" },
  ]);

  const cancelarConsulta = (id: number) => {
    setConsultas(consultas.filter(consulta => consulta.id !== id));
  };

  const adicionarConsulta = () => {
    const novaConsulta: Consulta = {
      id: consultas.length + 1,
      data: "2025-02-01",
      hora: "09:00", 
      medico: "Dra. Ana Oliveira",
      especialidade: "Pediatria"
    };
    setConsultas([...consultas, novaConsulta]);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <div className="flex justify-between items-center">
          <h1 className="header-title">Ver Agenda</h1>
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
        <section className="max-w-4xl mx-auto">
          <h2 className="section-title mb-4">Agenda de Teleconsultas</h2>
          <p className="text-black text-left mb-6">
            Aqui estão suas consultas agendadas:
          </p>

          <button 
            onClick={adicionarConsulta}
            className="form-button mb-6 max-w-xs"
          >
            + Adicionar Consulta de Exemplo
          </button>

          <div className="overflow-x-auto">
            <table className="tabela-agenda">
              <thead>
                <tr className="tabela-cabecalho">
                  <th className="tabela-celula">Data</th>
                  <th className="tabela-celula">Hora</th>
                  <th className="tabela-celula">Médico</th>
                  <th className="tabela-celula">Especialidade</th>
                  <th className="tabela-celula">Ações</th>
                </tr>
              </thead>
              <tbody>
                {consultas.map((consulta) => (
                  <tr key={consulta.id}>
                    <td className="tabela-celula">{consulta.data}</td>
                    <td className="tabela-celula">{consulta.hora}</td>
                    <td className="tabela-celula">{consulta.medico}</td>
                    <td className="tabela-celula">{consulta.especialidade}</td>
                    <td className="tabela-celula">
                      <button 
                        onClick={() => cancelarConsulta(consulta.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {consultas.length === 0 && (
            <p className="text-black text-center mt-8">
              Nenhuma consulta agendada.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}