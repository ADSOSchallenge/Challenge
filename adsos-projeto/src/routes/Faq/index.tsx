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
        <ul className="list-disc ml-6">
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
        <p>
          Você pode usar a seção de suporte dentro do app para enviar perguntas ou relatar problemas.
          Também dá pra entrar em contato pelo site do ADSOS:{" "}
          <a href="/contato" className="text-blue-500 underline">Clique aqui</a>.
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
    <div >
      <h1>FAQ</h1>  

      <section>
        <h2>Bem-vindo à seção de perguntas frequentes!</h2>
        <p className="text-gray-700">
          Aqui, você encontrará respostas para as dúvidas mais comuns sobre o uso do aplicativo do Hospital das Clínicas
          e os serviços oferecidos. Se não encontrar a informação que procura, entre em contato com nossa equipe de suporte ADSOS.
        </p>
      </section>

      <article className="space-y-4">
        {perguntas.map((item, index) => (
          <div key={index} className="border border-blue-200 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-blue-100 hover:bg-blue-200 transition"
            >
              <span className="font-medium text-blue-900">{item.pergunta}</span>
              <span className="text-blue-700 text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-4 bg-white text-gray-800 animate-fadeIn">
                {item.resposta}
              </div>
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
