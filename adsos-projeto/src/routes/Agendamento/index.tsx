import { useState } from "react";
import Formulario from "../../components/Formulario/Formulario";

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
    cpfMedico: "",
    dataConsulta: "",
    horaConsulta: "",
    especializacao: "",
  });

  const campos = [
    { label: "CPF do paciente", name: "cpfPaciente", placeholder: "Digite o CPF do paciente...", required: true },
    { 
      label: "Médico", 
      name: "cpfMedico", 
      type: "select", 
      placeholder: medicos.map(m => m.nome + " - " + m.especialidade).join("/"), 
      required: true 
    },
    { label: "Data", name: "dataConsulta", type: "date", required: true },
    { label: "Horário", name: "horaConsulta", type: "time", required: true },
    { label: "Especialização", name: "especializacao", placeholder: "Digite a especialização da consulta...", required: true },
  ];

  const handleSubmit = (dados: Record<string, string>) => {
    const consultasExistentes: any[] = JSON.parse(localStorage.getItem("consultas") || "[]");

    const novaConsulta = {
      id: consultasExistentes.length + 1,
      data: dados.dataConsulta,
      hora: dados.horaConsulta,
      medico: medicos.find(m => m.nome + " - " + m.especialidade === dados.cpfMedico)?.nome || "",
      especialidade: dados.especializacao,
    };

    localStorage.setItem("consultas", JSON.stringify([...consultasExistentes, novaConsulta]));
    alert("Consulta agendada com sucesso!");

    setValores({
      cpfPaciente: "",
      cpfMedico: "",
      dataConsulta: "",
      horaConsulta: "",
      especializacao: "",
    });
  };

  return (
    <main>
      <div>
        <section>
          <Formulario
            titulo="Preencha os dados da consulta"
            campos={campos}
            valores={valores}
            setValores={setValores}
            onSubmit={handleSubmit}
            botaoTexto="Agendar"
          />
        </section>
      </div>
    </main>
  );
}
