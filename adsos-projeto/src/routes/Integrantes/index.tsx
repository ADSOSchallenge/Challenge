import { useEffect } from "react";
import amandhaImg from "../../assets/amandha.png";
import giovannaImg from "../../assets/nana.png";
import erickImg from "../../assets/erick.png";
import menu1 from "../../assets/menu-1.png";
import menu2 from "../../assets/menu-2.png";
import menu3 from "../../assets/menu-3.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  return (
    <main className="text-center scroll-smooth">
      <section>
        <h1>Sobre nós!</h1>
        <p>
          Olá! Nós somos os integrantes do ADSOS, o projeto que visa diminuir o
          absenteísmo nas terapias por teleatendimento. O grupo é composto por
          Amandha Yumi, Erick Takeshi e Giovanna Bardella, alunos de Análise e
          Desenvolvimento de Sistemas na FIAP. Clique em uma das fotos ou role a
          página para saber mais sobre cada um de nós!
        </p>
      </section>

      <section className="flex justify-center gap-4 my-4">
        <a href="#amandha" aria-label="Ver mais sobre Amandha Yumi">
          <img
            className="integrantesmenu cursor-pointer transition-transform hover:scale-105"
            src={menu2}
            alt="Foto da Amandha Yumi em formato circular"
          />
        </a>
        <a href="#giovanna" aria-label="Ver mais sobre Giovanna Bardella">
          <img
            className="integrantesmenu cursor-pointer transition-transform hover:scale-105"
            src={menu1}
            alt="Foto da Giovanna Bardella em formato circular"
          />
        </a>
        <a href="#erick" aria-label="Ver mais sobre Erick Takeshi">
          <img
            className="integrantesmenu cursor-pointer transition-transform hover:scale-105"
            src={menu3}
            alt="Foto do Erick Takeshi em formato circular"
          />
        </a>
      </section>

      <section id="amandha" className="my-8">
        <h2>Amandha Yumi Toyota Artulino</h2>
        <img
          className="mx-auto rounded-xl w-[400px] h-[400px] object-cover mb-4"
          src={amandhaImg}
          alt="Foto da Amandha Yumi"
        />
        <p>RM: 563549 - 1TDSPJ</p>
        <p>
          💻 Olá! Eu sou a Amandha Yumi, tenho 19 anos e sou estudante de
          Análise e Desenvolvimento de Sistemas. Desde que comecei na área de
          tecnologia, adorei o poder de transformar ideias em soluções reais
          através do código. Gosto muito de front-end, onde posso unir lógica e
          criatividade, mas também estou explorando o back-end para entender
          todo o processo de desenvolvimento.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/amandhayumitoyotaartulino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/AmandhaYumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>

      <section id="giovanna" className="my-8">
        <h2>Giovanna Bardella Gomes</h2>
        <img
          className="mx-auto rounded-xl w-[400px] h-[400px] object-cover mb-4"
          src={giovannaImg}
          alt="Foto da Giovanna Bardella"
        />
        <p>RM: 561439 - 1TDSPJ </p>
        <p>
          💻 Olá! Sou a Giovanna Bardella, uma das integrantes do grupo ADSOS.
          Tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas
          na FIAP. Gosto muito de juntar a lógica com a criatividade, a
          matemática com a arte. Database e ChatBot são os meus favoritos na
          criação desse projeto.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/giovanna-bardella-gomes-950082365"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/nanabardella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>

      <section id="erick" className="my-8">
        <h2>Erick Takeshi Andrade Nakajune</h2>
        <img
          className="mx-auto rounded-xl w-[400px] h-[400px] object-cover mb-4"
          src={erickImg}
          alt="Foto do Erick Takeshi"
        />
        <p>RM: 566059 - 1TDSPJ</p>
        <p>
          💻 Olá! Sou o Erick Takeshi, um dos integrantes do grupo ADSOS. Tenho
          18 anos e sou aluno da FIAP, estudando Análise e Desenvolvimento de
          Sistemas. Adoro juntar a minha criatividade com meus conhecimentos em
          matemática. Banco de Dados e Inteligência Artificial são as áreas que
          mais me atraem, mas sempre estou buscando melhorar minhas habilidades
          em programação.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://br.linkedin.com/in/erick-nakajune-07815a348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/Etvtaeyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="botao" src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>
    </main>
  );
}
