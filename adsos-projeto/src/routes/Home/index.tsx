import logo from '../../assets/adsos.png';
import hc from '../../assets/hc.png';
export default function Home() {
  document.title = "Home";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <article className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="section-title mb-4">Bem-vindo ao ADSOS!</h2>
            <p className="text-black text-left mb-4">
              Nosso projeto tem como objetivo facilitar o acesso à saúde digital
              para pessoas com dificuldades no uso de tecnologias móveis,
              promovendo inclusão e autonomia.
            </p>
            <p className="text-black text-left mb-4">
              A solução oferece suporte para o uso de aplicativos de saúde, pois
              aqui você aprende a abrir e acessar o aplicativo do Hospital das
              Clínicas de forma rápida e fácil. Nosso objetivo é ajudar quem tem
              dificuldade com tecnologias digitais, garantindo um acesso
              tranquilo aos serviços de saúde online.
            </p>
            <img 
              src={logo}  
              alt="Foto da logo da ADSOS." 
              className="mx-auto max-w-xs"
            />
          </section>

          <section className="mb-8">
            <h2 className="section-title mb-4">O que é o Hospital das Clínicas?</h2>
            <p className="text-black text-left mb-4">
              O Hospital das Clínicas da Faculdade de Medicina da Universidade
              de São Paulo (HCFMUSP) é o maior complexo hospitalar da América
              Latina e uma referência nacional e internacional em saúde, ensino
              e pesquisa.
            </p>
            <p className="text-black text-left mb-4">
              Inaugurado em 19 de abril de 1944, o HCFMUSP é uma autarquia do
              governo do estado de São Paulo, vinculada à Secretaria de Estado
              da Saúde para fins administrativos e associado à Faculdade de
              Medicina da USP para atividades de ensino e pesquisa.
            </p>
            <p className="text-black text-left mb-4">
              Para mais informações, visite o site oficial:{" "}
              <a
                target="_blank"
                href="https://www.hc.fm.usp.br/"
                className="text-[#285f89] hover:underline"
                aria-label="Ir para o site oficial do Hospital das Clínicas"
              >
                Hospital das Clínicas
              </a>
            </p>
            <img
              src={hc} 
              alt="Foto da logo do Hospital das Clínicas"
              className="mx-auto max-w-xs"
            />
          </section>
        </article>
      </main>

      <footer className="footer-bg">
        <p className="footer-text">
          Produzido por ADSOS - Copyright 2025 © - Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}