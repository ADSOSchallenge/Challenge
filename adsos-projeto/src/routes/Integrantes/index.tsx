export default function Integrantes() {
  document.title = "Integrantes";

  const membros = [
    { nome: "Giovanna Bardella", funcao: "Front-end" },
    { nome: "Amandha Yumi", funcao: "Back-end" },
    { nome: "Erick Takeshi", funcao: "Back-end" },
  ];

  return (
    <main>
      <h1>Integrantes do Projeto</h1>
      <ul>
        {membros.map((m, i) => (
          <li key={i}>
            <strong>{m.nome}</strong> — {m.funcao}
          </li>
        ))}
      </ul>
    </main>
  );
}
