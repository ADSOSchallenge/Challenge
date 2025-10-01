import { useState } from "react";

export default function Faq() {
  document.title = "FAQ";

  const perguntas = [
    {
      pergunta: "1. Como faço para baixar o aplicativo Portal do Paciente HC?",
      resposta: "Você pode encontrar o aplicativo nas lojas oficiais: Google Play Store (para Android) ou App Store (para iPhone)."
    },
    {
      pergunta: "2. O que acontece se minha internet cair durante o uso?",
      resposta: "Se sua conexão for interrompida, não se preocupe. Assim que a internet voltar, é só abrir o aplicativo ou o site novamente para continuar sua teleconsulta."
    },
    {
      pergunta: "3. Esqueci minha senha. E agora?",
      resposta: "Na tela de login, clique em 'Esqueceu sua senha?' e siga os passos indicados para criar uma nova senha."
    },
    {
      pergunta: "4. Posso usar o app em mais de um aparelho?",
      resposta: "Sim! Você pode acessar sua conta em vários dispositivos, desde que use o mesmo login e senha."
    },
    {
      pergunta: "5. O que preciso para participar de uma teleconsulta?",
      resposta: (
        <ul className="text-gray-800 text-left pl-6 list-disc">
          <li>Ter uma consulta agendada;</li>
          <li>Estar conectado à internet;</li>
          <li>Ter o aplicativo Portal do Paciente HC instalado;</li>
          <li>Ter um cadastro ativo no aplicativo;</li>
          <li>Aceitar o Termo de Consentimento;</li>
          <li>Usar um aparelho com câmera, como celular ou computador.</li>
        </ul>
      )
    },
    {
      pergunta: "6. O que é o Termo de Consentimento?",
      resposta: "É um documento que confirma que você está de acordo com a realização da consulta, depois de receber todas as informações sobre ela, incluindo riscos e benefícios."
    },
    {
      pergunta: "7. Como faço para entrar na minha teleconsulta?",
      resposta: "Depois de clicar em 'Entrar na Teleconsulta', você será levado para a Sala de Espera. Quando o médico estiver pronto, clique em 'Entrar na Teleconsulta' para começar."
    },
    {
      pergunta: "8. O aplicativo funciona em qualquer celular?",
      resposta: "O app funciona em aparelhos Android e iOS, mas é importante que o sistema do seu celular esteja atualizado para garantir o bom funcionamento."
    },
    {
      pergunta: "9. Como posso tirar dúvidas sobre o atendimento?",
      resposta: (
        <p className="text-gray-800">
          Você pode usar a seção de suporte dentro do app para enviar perguntas ou relatar problemas.
          Também dá pra entrar em contato pelo site do ADSOS:{" "}
          <a href="/contato" className="text-blue-700 hover:underline">Clique aqui</a>.
        </p>
      )
    },
    {
      pergunta: "10. O aplicativo funciona sem internet?",
      resposta: "Não. Para acessar consultas, exames e outros serviços pelo app, é necessário estar conectado à internet."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#285f89] text-white p-4">
        <h1 className="text-2xl font-bold">FAQ</h1>
      </header>

      <main className="flex-1 p-4">
        <section className="max-w-4xl mx-auto mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Bem-vindo à seção de perguntas frequentes!</h2>
          <p className="text-gray-800 text-left">
            Aqui, você encontrará respostas para as dúvidas mais comuns sobre o uso do aplicativo do Hospital das Clínicas
            e os serviços oferecidos. Se não encontrar a informação que procura, entre em contato com nossa equipe de suporte ADSOS.
          </p>
        </section>

        <article className="max-w-4xl mx-auto flex flex-col gap-2">
          {perguntas.map((item, index) => (
            <div key={index} className="border rounded-md overflow-hidden shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 bg-gray-200 hover:bg-gray-300 font-medium flex justify-between items-center"
              >
                <span className="text-gray-900">{item.pergunta}</span>
                <span className="text-gray-700">{openIndex === index ? "−" : "+"}</span>
              </button>

              <div
                className={`bg-white px-4 overflow-hidden transition-max-height duration-300`}
                style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
              >
                <div className="py-2 text-gray-800">{item.resposta}</div>
              </div>
            </div>
          ))}
        </article>
      </main>
    </div>
  );
}

