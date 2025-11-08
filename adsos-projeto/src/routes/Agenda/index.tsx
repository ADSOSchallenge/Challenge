import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Consulta = {
  id: number;
  data: string;
  hora: string;
  medico: string;
  especialidade: string;
};

export default function Agenda() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    const consultasSalvas: Consulta[] = JSON.parse(localStorage.getItem("consultas") || "[]");
    setConsultas(consultasSalvas);
  }, []);


  const cancelarConsulta = (id: number) => {
    const novasConsultas = consultas.filter(c => c.id !== id);
    setConsultas(novasConsultas);
    localStorage.setItem("consultas", JSON.stringify(novasConsultas));
  };

  return (
    <main>
      <div>
        <section>
          <h1>Agenda de Teleconsultas</h1>
          <p>
            Aqui estão suas consultas agendadas:
          </p>

          <div className="overflow-x-auto">
            {consultas.length > 0 ? (
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
            ) : (
              <p className="text-black text-center mt-8">
                Nenhuma consulta agendada.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
