
export default function Home() {
  document.title = "Home";

  return (
    <body>
  
    <main>
        <article>
            <section>
                <h2>Bem-vindo ao ADSOS!</h2>
                <p>Nosso projeto tem como objetivo facilitar o acesso à saúde digital para pessoas com dificuldades no
                    uso de tecnologias móveis, promovendo inclusão e autonomia.</p>
                <p>A solução oferece suporte para o uso de aplicativos de saúde, pois aqui você aprende a abrir e
                    acessar o aplicativo do Hospital das Clínicas de forma rápida e fácil. Nosso objetivo é ajudar quem
                    tem dificuldade com tecnologias digitais, garantindo um acesso tranquilo aos serviços de saúde
                    online.</p>
                <img src="./img/adsos.png" alt="Foto da logo da ADSOS." />
            </section>

            <section>
                <h2>O que é o Hospital das Clínicas?</h2>
                <p>O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP) é o maior
                    complexo hospitalar da América Latina e uma referência nacional e internacional em saúde, ensino e
                    pesquisa.</p>
                <p>Inaugurado em 19 de abril de 1944, o HCFMUSP é uma autarquia do governo do estado de São Paulo,
                    vinculada à Secretaria de Estado da Saúde para fins administrativos e associado à Faculdade de
                    Medicina da USP para atividades de ensino e pesquisa.</p>
                <p>Para mais informações, visite o site oficial: <a target="_blank" href="https://www.hc.fm.usp.br/"
                        aria-label="Ir para o site oficial do Hospital das Clínicas">Hospital das Clínicas</a></p>
                <img src="./img/hc.png" alt="Foto da logo do Hospital das Clínicas" />
            </section>
        </article>
    </main>

    <footer>
        <p id="footerp">Produzido por ADSOS - Copyright 2025 © - Todos os direitos reservados.</p>
    </footer>
</body>

  );
}
