import React, { useEffect } from 'react';
import amandhaImg from '../../assets/amandha.png';
import giovannaImg from '../../assets/nana.png'; 
import erickImg from '../../assets/erick.png';
import menu1 from '../../assets/menu-1.png';
import menu2 from '../../assets/menu-2.png';
import menu3 from '../../assets/menu-3.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Integrantes do ADSOS</h1>
      </header>

      <main className="flex-1 p-4">
        <article className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="section-title mb-4">Sobre nós!</h2>
            <p className="text-black text-left mb-6">
              Olá! Nós somos os integrantes do ADSOS, o projeto que visa diminuir o absenteísmo nas terapias por
              teleatendimento. O grupo é composto por Amandha Yumi, Erick Takeshi e Giovanna Bardella, alunos de
              Análise e Desenvolvimento de Sistemas na FIAP. Clique em uma das fotos ou role a página para saber mais sobre cada um de nós!
            </p>
            <div className="navegacao-integrantes flex justify-center gap-8">
              <a href="#amandha" aria-label="Ver mais sobre Amandha Yumi">
                <img className="integrantesmenu" src={menu2} alt="Foto da Amandha Yumi em formato circular"/>
              </a>
              <a href="#giovanna" aria-label="Ver mais sobre Giovanna Bardella">
                <img className="integrantesmenu" src={menu1} alt="Foto da Giovanna Bardella em formato circular"/>
              </a>
              <a href="#erick" aria-label="Ver mais sobre Erick Takeshi">
                <img className="integrantesmenu" src={menu3} alt="Foto do Erick Takeshi em formato circular"/>
              </a>
            </div>
          </section>

          <section id="amandha" className="mb-12">
            <h2 className="section-title mb-4">Amandha Yumi Toyota Artulino</h2>
            <img className="integrantesimg mx-auto mb-4" src={amandhaImg} alt="Foto da Amandha Yumi"/>
            <p className="rm text-center mb-4">RM: 563549</p>
            <p className="text-black text-left mb-4">
              💻 Olá! Eu sou a Amandha Yumi, tenho 19 anos e sou estudante de Análise e Desenvolvimento de
              Sistemas. Desde que comecei na área de tecnologia, adorei o poder de transformar ideias em soluções
              reais através do código. Gosto muito de front-end, onde posso unir lógica e criatividade, mas também
              estou explorando o back-end para entender todo o processo de desenvolvimento.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/amandhayumitoyotaartulino" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Amandha Yumi">
                <img className="botao" src={linkedin} alt="Logo do LinkedIn"/>
              </a>
              <a href="https://github.com/AmandhaYumi" target="_blank" rel="noopener noreferrer" aria-label="GitHub da Amandha Yumi">
                <img className="botao" src={github} alt="Logo do GitHub"/>
              </a>
            </div>
          </section>

          <section id="giovanna" className="mb-12">
            <h2 className="section-title mb-4">Giovanna Bardella Gomes</h2>
            <img className="integrantesimg mx-auto mb-4" src={giovannaImg} alt="Foto da Giovanna Bardella"/> 
            <p className="rm text-center mb-4">RM: 561439</p>
            <p className="text-black text-left mb-4">
              💻 Olá! Sou a Giovanna Bardella, uma das integrantes do grupo ADSOS. Tenho 22 anos e sou estudante de
              Análise e Desenvolvimento de Sistemas na FIAP. Gosto muito de juntar a lógica com a criatividade, a
              matemática com a arte. Design e ChatBot são os meus favoritos na criação desse projeto.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/giovanna-bardella-gomes-950082365" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn da Giovanna Bardella">
                <img className="botao" src={linkedin} alt="Logo do LinkedIn"/>
              </a>
              <a href="https://github.com/nanabardella" target="_blank" rel="noopener noreferrer" aria-label="GitHub da Giovanna Bardella">
                <img className="botao" src={github} alt="Logo do GitHub"/>
              </a>
            </div>
          </section>

          <section id="erick" className="mb-12">
            <h2 className="section-title mb-4">Erick Takeshi Andrade Nakajune</h2>
            <img className="integrantesimg mx-auto mb-4" src={erickImg} alt="Foto do Erick Takeshi"/>
            <p className="rm text-center mb-4">RM: 566059</p>
            <p className="text-black text-left mb-4">
              💻 Olá, sou Erick Takeshi, um dos integrantes do grupo ADSOS. Tenho 18 anos e sou aluno da FIAP,
              estudando Análise e Desenvolvimento de Sistemas. Adoro juntar a minha criatividade com meus
              conhecimentos em matemática. Banco de Dados e Inteligência Artificial são as áreas que mais me
              atraem, mas sempre estou buscando melhorar minhas habilidades em programação.
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://br.linkedin.com/in/erick-nakajune-07815a348" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do Erick Takeshi">
                <img className="botao" src={linkedin} alt="Logo do LinkedIn"/>
              </a>
              <a href="https://github.com/Etvtaeyo" target="_blank" rel="noopener noreferrer" aria-label="GitHub do Erick Takeshi">
                <img className="botao" src={github} alt="Logo do GitHub"/>
              </a>
            </div>
          </section>
        </article>
      </main>

    </div>
  );
}