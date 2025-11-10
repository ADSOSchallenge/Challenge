import { useState } from "react";
import Formulario from "../../components/Formulario/Formulario";

const api = import.meta.env.VITE_API_URL;

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

  const [valores, setValores] = useState({
    cpfPaciente: "",
    medicoId: "",
    dataConsulta: "",
    horaConsulta: "",
    especializacao: "",
  });

  const campos = [
    { 
      label: "CPF do paciente", 
      name: "cpfPaciente", 
      placeholder: "Digite o CPF do paciente...", 
      required: true 
    },
    { 
      label: "Médico", 
      name: "medicoId", 
      type: "select", 
      options: medicos.map((m) => ({
        value: m.id,
        label: `${m.nome} - ${m.especialidade}`,
      })),
      required: true,
    },
    { label: "Data", name: "dataConsulta", type: "date", required: true },
    { label: "Horário", name: "horaConsulta", type: "time", required: true },
    { 
      label: "Especialização", 
      name: "especializacao", 
      placeholder: "Digite a especialização da consulta...", 
      required: true 
    },
  ];

  const handleSubmit = async (dados: Record<string, string>) => {
    const idPaciente = 5;

    const dataHora = `${dados.dataConsulta}T${dados.horaConsulta}:00`;

    const novaConsulta = {
      idMedico: parseInt(dados.medicoId),
      idPaciente,
      data: dataHora,
      descricao: dados.especializacao || "Consulta de retorno",
    };

    try {
      const resp = await fetch(`${api}/consulta`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaConsulta),
      });

      if (!resp.ok) throw new Error("Erro ao agendar consulta");

      alert("Consulta agendada com sucesso!");

      setValores({
        cpfPaciente: "",
        medicoId: "",
        dataConsulta: "",
        horaConsulta: "",
        especializacao: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao agendar consulta. Tente novamente.");
    }
  };

  return (
    <main>
      <section>
        <h1>Agendar Consulta</h1>
        <Formulario
          titulo="Preencha os dados da consulta"
          campos={campos}
          valores={valores}
          setValores={setValores}
          onSubmit={handleSubmit}
          botaoTexto="Agendar"
        />
      </section>
    </main>
  );
}
