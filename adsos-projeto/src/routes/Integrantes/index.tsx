import React, { useEffect } from 'react';

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  return (
    <div>
      <header>
        <h1>Integrantes do ADSOS</h1>
      </header>

      <main>
        <article>
          <section>
            <h2>Sobre nós!</h2>
            <p>
              Olá! Nós somos os integrantes do ADSOS, o projeto que visa diminuir o absenteísmo nas terapias por
              teleatendimento. O grupo é composto por Amandha Yumi, Erick Takeshi e Giovanna Bardella, alunos de
              Análise e Desenvolvimento de Sistemas na FIAP. Clique em uma das fotos ou role a página para saber mais sobre cada um de nós!
            </p>
            <div className="navegacao-integrantes">
              <a href="#amandha" aria-label="Ver mais sobre Amandha Yumi">
                <img className="integrantesmenu" src="../img/menu-2.png" alt="Foto da Amandha Yumi em formato circular"/>
              </a>
              <a href="#giovanna" aria-label="Ver mais sobre Giovanna Bardella">
                <img className="integrantesmenu" src="../img/menu-1.png" alt="Foto da Giovanna Bardella em formato circular"/>
              </a>
              <a href="#erick" aria-label="Ver mais sobre Erick Takeshi">
                <img className="integrantesmenu" src="../img/menu-3.png" alt="Foto do Erick Takeshi em formato circular"/>
              </a>
            </div>
          </section>

          <section id="amandha">
            <h2>Amandha Yumi Toyota Artulino</h2>
            <img className="integrantesimg" src="../img/amandha.png" alt="Foto da Amandha Yumi"/>
            <p className="rm">RM: 563549</p>
            <p>
              💻 Olá! Eu sou a Amandha Yumi, tenho 19 anos e sou estudante de Análise e Desenvolvimento de
              Sistemas. Desde que comecei na área de tecnologia, adorei o poder de transformar ideias em soluções
              reais através do código. Gosto muito de front-end, onde posso unir lógica e criatividade, mas também
              estou explorando o back-end para entender todo o processo de desenvolvimento.
            </p>
            <a href="https://www.linkedin.com/in/amandhayumitoyotaartulino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Amandha Yumi">
              <img className="botao" src="../img/linkedin.png" alt="Logo do LinkedIn"/>
            </a>
            <a href="https://github.com/AmandhaYumi" target="_blank" rel="noopener noreferrer" aria-label="GitHub da Amandha Yumi">
              <img className="botao" src="../img/github.png" alt="Logo do GitHub"/>
            </a>
          </section>

          <section id="giovanna">
            <h2>Giovanna Bardella Gomes</h2>
            <img className="integrantesimg" src="../img/nana.png" alt="Foto da Giovanna Bardella"/>
            <p className="rm">RM: 561439</p>
            <p>
              💻 Olá! Sou a Giovanna Bardella, uma das integrantes do grupo ADSOS. Tenho 22 anos e sou estudante de
              Análise e Desenvolvimento de Sistemas na FIAP. Gosto muito de juntar a lógica com a criatividade, a
              matemática com a arte. Design e ChatBot são os meus favoritos na criação desse projeto.
            </p>
            <a href="https://www.linkedin.com/in/giovanna-bardella-gomes-950082365" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Giovanna Bardella">
              <img className="botao" src="../img/linkedin.png" alt="Logo do LinkedIn"/>
            </a>
            <a href="https://github.com/nanabardella" target="_blank" rel="noopener noreferrer" aria-label="GitHub da Giovanna Bardella">
              <img className="botao" src="../img/github.png" alt="Logo do GitHub"/>
            </a>
          </section>

          <section id="erick">
            <h2>Erick Takeshi Andrade Nakajune</h2>
            <img className="integrantesimg" src="../img/erick.png" alt="Foto do Erick Takeshi"/>
            <p className="rm">RM: 566059</p>
            <p>
              💻 Olá, sou Erick Takeshi, um dos integrantes do grupo ADSOS. Tenho 17 anos e sou aluno da FIAP,
              estudando Análise e Desenvolvimento de Sistemas. Adoro juntar a minha criatividade com meus
              conhecimentos em matemática. Banco de Dados e Inteligência Artificial são as áreas que mais me
              atraem, mas sempre estou buscando melhorar minhas habilidades em programação.
            </p>
            <a href="https://br.linkedin.com/in/erick-nakajune-07815a348" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do Erick Takeshi">
              <img className="botao" src="../img/linkedin.png" alt="Logo do LinkedIn"/>
            </a>
            <a href="https://github.com/Etvtaeyo" target="_blank" rel="noopener noreferrer" aria-label="GitHub do Erick Takeshi">
              <img className="botao" src="../img/github.png" alt="Logo do GitHub"/>
            </a>
          </section>
        </article>
      </main>
    </div>
  );
}
