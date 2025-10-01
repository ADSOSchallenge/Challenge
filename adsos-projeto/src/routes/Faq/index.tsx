export default function Faq() {
  document.title = "FAQ";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">FAQ</h1>
      </header>    

      <main className="flex-1 p-4">
        <section className="max-w-4xl mx-auto mb-8">
          <h2 className="section-title mb-4">Bem-vindo à seção de perguntas frequentes!</h2>
          <p className="text-black text-left">
            Aqui, você encontrará respostas para as dúvidas mais comuns sobre o uso do aplicativo do Hospital das Clínicas
            e os serviços oferecidos. Se não encontrar a informação que procura, entre em contato com nossa equipe de suporte ADSOS.
          </p>
        </section>
        
        <article id="perguntas" className="max-w-4xl mx-auto">
          <button className="accordion">1. Como faço para baixar o aplicativo Portal do Paciente HC?</button>
          <div className="panel">
            <p>Você pode encontrar o aplicativo nas lojas oficiais: Google Play Store (para Android) ou App Store (para iPhone).</p>
          </div>

          <button className="accordion">2. O que acontece se minha internet cair durante o uso?</button>
          <div className="panel">
            <p>Se sua conexão for interrompida, não se preocupe. Assim que a internet voltar, é só abrir o aplicativo ou o site novamente para continuar sua teleconsulta.</p>
          </div>

          <button className="accordion">3. Esqueci minha senha. E agora?</button>
          <div className="panel">
            <p>Na tela de login, clique em "Esqueceu sua senha?" e siga os passos indicados para criar uma nova senha.</p>
          </div>

          <button className="accordion">4. Posso usar o app em mais de um aparelho?</button>
          <div className="panel">
            <p>Sim! Você pode acessar sua conta em vários dispositivos, desde que use o mesmo login e senha.</p>
          </div>

          <button className="accordion">5. O que preciso para participar de uma teleconsulta?</button>
          <div className="panel">
            <p>Você vai precisar:</p>
            <ul className="text-black text-left pl-6">
              <li>Ter uma consulta agendada;</li>
              <li>Estar conectado à internet;</li>
              <li>Ter o aplicativo Portal do Paciente HC instalado;</li>
              <li>Ter um cadastro ativo no aplicativo;</li>
              <li>Aceitar o Termo de Consentimento;</li>
              <li>Usar um aparelho com câmera, como celular ou computador.</li>
            </ul>
          </div>

          <button className="accordion">6. O que é o Termo de Consentimento?</button>
          <div className="panel">
            <p>É um documento que confirma que você está de acordo com a realização da consulta, depois de receber todas as informações sobre ela, incluindo riscos e benefícios.</p>
          </div>

          <button className="accordion">7. Como faço para entrar na minha teleconsulta?</button>
          <div className="panel">
            <p>Depois de clicar em "Entrar na Teleconsulta", você será levado para a Sala de Espera. Quando o médico estiver pronto, clique em "Entrar na Teleconsulta" para começar.</p>
          </div>

          <button className="accordion">8. O aplicativo funciona em qualquer celular?</button>
          <div className="panel">
            <p>O app funciona em aparelhos Android e iOS, mas é importante que o sistema do seu celular esteja atualizado para garantir o bom funcionamento.</p>
          </div>

          <button className="accordion">9. Como posso tirar dúvidas sobre o atendimento?</button>
          <div className="panel">
            <p>
              Você pode usar a seção de suporte dentro do app para enviar perguntas ou relatar problemas.
              Também dá pra entrar em contato pelo site do ADSOS: {' '}
              <a href="/contato" className="text-[#285f89] hover:underline">Clique aqui</a>.
            </p>
          </div>

          <button className="accordion">10. O aplicativo funciona sem internet?</button>
          <div className="panel">
            <p>Não. Para acessar consultas, exames e outros serviços pelo app, é necessário estar conectado à internet.</p>
          </div>
        </article>
      </main>

      <footer className="footer-bg">
        <p className="footer-text">
          Produzido por ADSOS - Copyright 2025 © - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}