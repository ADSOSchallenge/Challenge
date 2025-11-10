import { useState, useEffect } from "react";

const api = import.meta.env.VITE_API_URL;

type Consulta = {
  idConsulta: number;
  data: string;       
  descricao: string;
  medico: string;
  paciente: string;
};

export default function Agenda() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const resp = await fetch(`${api}/consulta`);
        if (!resp.ok) throw new Error("Erro ao carregar consultas");
        const dados: Consulta[] = await resp.json();
        setConsultas(dados);
      } catch (error) {
        console.error(error);
        alert("Não foi possível carregar suas consultas.");
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  const cancelarConsulta = async (id: number) => {
    if (!window.confirm("Deseja realmente cancelar esta consulta?")) return;

    try {
      const resp = await fetch(`${api}/consulta/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) throw new Error("Erro ao cancelar consulta");
      setConsultas((prev) => prev.filter((c) => c.idConsulta !== id));
      alert("Consulta cancelada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Não foi possível cancelar a consulta. Tente novamente.");
    }
  };

  if (loading) return <p>Carregando consultas...</p>;

  return (
    <main>
      <section>
        <h1>Agenda de Teleconsultas</h1>
        <p>Aqui estão suas consultas agendadas:</p>

        <div className="overflow-x-auto">
          {consultas.length > 0 ? (
            <table className="tabela-agenda">
              <thead>
                <tr className="tabela-cabecalho">
                  <th className="tabela-celula">Data</th>
                  <th className="tabela-celula">Hora</th>
                  <th className="tabela-celula">Médico</th>
                  <th className="tabela-celula">Paciente</th>
                  <th className="tabela-celula">Ações</th>
                </tr>
              </thead>
              <tbody>
                {consultas.map((consulta) => {
                  const [data, hora] = consulta.data.split("T");
                  return (
                    <tr key={consulta.idConsulta}>
                      <td className="tabela-celula">{data}</td>
                      <td className="tabela-celula">{hora}</td>
                      <td className="tabela-celula">{consulta.medico}</td>
                      <td className="tabela-celula">{consulta.paciente}</td>
                      <td className="tabela-celula">
                        <button
                          onClick={() => cancelarConsulta(consulta.idConsulta)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                        >
                          Cancelar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-black text-center mt-8">
              Nenhuma consulta agendada.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
