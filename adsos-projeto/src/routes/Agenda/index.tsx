import { useState, useEffect } from "react";

const api = import.meta.env.VITE_API_URL;

type Consulta = {
  id: number;
  data: string;
  hora: string;
  medico: string;
  especialidade: string;
};

export default function Agenda() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const resp = await fetch(`${api}/consultas`);
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
      const resp = await fetch(`${api}/consultas/${id}`, {
        method: "DELETE",
      });

      if (!resp.ok) throw new Error("Erro ao cancelar consulta");
      setConsultas((prev) => prev.filter((c) => c.id !== id));
      alert("Consulta cancelada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Não foi possível cancelar a consulta. Tente novamente.");
    }
  };

  if (loading) return <p>Carregando consultas...</p>;

  return (
    <main>
      <div>
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
