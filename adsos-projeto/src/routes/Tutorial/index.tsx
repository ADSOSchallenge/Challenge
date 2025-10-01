export default function Tutorial() {
  document.title = "Tutorial";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Tutorial</h1>
      </header>

      <main className="flex-1 p-4">
        <article className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="section-title mb-4">Bem-vindo ao tutorial!</h2>
            <p className="text-black text-left">
              Está com dificuldades para acessar o aplicativo e sua teleconsulta? Neste tutorial, vamos te mostrar,
              de forma clara e fácil, como abrir o aplicativo do Hospital das Clínicas e acessar sua teleconsulta
              de maneira simples e sem complicações!
            </p>
          </section>

         <section id="tutorial" className="text-tutorial">
            <ul className="space-y-8">
              <li className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">1. Acessando o Portal do Paciente</h2>
                <p className="text-black mb-2">Para começar, é necessário acessar o Portal do Paciente. O processo varia de acordo com o
                  tipo de dispositivo que você utiliza:</p>
                <p className="text-black">- Para Android: baixe o aplicativo na <a
                  href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente"
                  target="_blank"
                  className="text-[#285f89] hover:underline"
                  aria-label="Baixar o aplicativo Portal do Paciente para Android na Google Play Store">Google
                  Play Store</a>.</p>
                <p className="text-black">- Para iPhone e iOS: acesse a <a
                  href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502" target="_blank"
                  className="text-[#285f89] hover:underline"
                  aria-label="Baixar o aplicativo Portal do Paciente para iPhone na App Store">App
                  Store</a>.</p>
              </li>

              <li className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">2. Criando sua senha de acesso</h2>
                <p className="text-black mb-2">Antes de utilizar o Portal do Paciente pela primeira vez, você precisa criar uma senha de
                  acesso.</p>
                <p className="text-black">Após abrir o aplicativo, clique na opção "Cadastrar Senha" e siga as instruções na tela para
                  definir sua senha.</p>
              </li>

              <li className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">3. Criando sua conta</h2>
                <p className="text-black mb-2">Depois de digitar seu CPF e data de nascimento, o Portal do Paciente irá procurar seus dados
                  no sistema do Complexo HCFMUSP.</p>
                <p className="text-black">Se o sistema encontrar seu registro, será exibida uma parte do seu nome para confirmação.</p>
              </li>

              <li className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">4. Acessando sua conta</h2>
                <p className="text-black mb-2">Depois de concluir o cadastro, você já pode entrar no Portal do Paciente.</p>
                <p className="text-black">Basta digitar seu CPF e a senha que você criou na etapa anterior, e em seguida clicar no
                  botão "Acessar".</p>
              </li>

              <li className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">5. Aceitar o Termo de Consentimento</h2>
                <p className="text-black">Caso seja sua primeira teleconsulta, será necessário aceitar o Termo de Consentimento, que
                  aparecerá automaticamente na tela ao agendar uma consulta.</p>
              </li>

              <li className="pb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">6. Entrando na Teleconsulta</h2>
                <p className="text-black mb-2">Ao clicar em "Entrar na Teleconsulta", você será encaminhado para a Sala de Espera. Quando o
                  médico estiver pronto, a tela será atualizada e você verá a opção para entrar.</p>
                <p className="text-black">Basta clicar em "Entrar na Teleconsulta" novamente para iniciar a consulta.</p>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}