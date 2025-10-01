## 🏥 Challenge 2025 - Hospital das Clínicas - ADSOS

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para **facilitar o acesso ao aplicativo do Hospital das Clínicas** e às suas teleconsultas, oferecendo uma experiência simples, intuitiva e inclusiva para todos os usuários.
O objetivo principal é **auxiliar pessoas com dificuldade no uso de celulares ou aplicativos**, promovendo **inclusão digital na área da saúde** e tornando a comunicação entre pacientes e hospital **mais rápida, prática e eficiente**.
O site conta com interface organizada e moderna, construída com **React, Vite e Tailwind CSS**, e oferece recursos como:
- **Consulta rápida de perguntas frequentes (FAQ)** para esclarecer dúvidas comuns sobre o aplicativo e os serviços do hospital.  
- **Registro de informações pessoais**, facilitando o contato do hospital com o paciente.  
- **Tutorial passo a passo** sobre como utilizar o aplicativo.  
- **Página Sobre o Hospital das Clínicas**: apresenta a instituição, seu histórico e propósito.  
- **Página Integrantes**: apresenta a equipe responsável pelo projeto, com links para GitHub e LinkedIn.  
- **Sistema de login ADSOS**, permitindo que pacientes autenticados visualizem a agenda de consultas, realizem agendamentos e enviem feedbacks sobre o atendimento.  
- **Componentes reutilizáveis**: `Cabecalho`, `Menu` e `Footer`.  
- **Design responsivo**, adaptado para diferentes dispositivos, com foco em acessibilidade.

---

## 📁 Estrutura do Projeto  
O projeto está organizado dentro da pasta **Sprint1**, contendo diferentes diretórios para manter arquivos específicos de cada funcionalidade:

- **css/** → Armazena arquivos de estilização do site, como `geral.css`, que define o design e aparência das páginas.

- **img/** → Contém todas as imagens e ícones utilizados no projeto.
  
- **js/** → Guarda arquivos JavaScript, incluindo.
    - `accordion.js` → Responsável pelo acordeão da página `FAQ.html`.  
    - `agenda.js` → Responsável pela visualização de consultas na página `agenda.html`.  
    - `agendamento.js` → Encarregado pelo agendamento das consultas na página `agendamento.html`.  
    - `cadastro.js` → Cadastra as contas dos usuários na página `cadastro.html`.
    - `contato.js` → Registra contato do usuário para o ADSOS entrar em contato.
    - `feedback.js` → Registra os feedbacks dos usuários na página `feedback.html`.
    - `login.js` → Responsável por logar os usuários e redirecionar para a página `menu.html`.
    - `logout.js` → Responsável por deslogar os usuários.
 
- **paginas/** → Diretório onde estão as páginas individuais do site:
    - `contato.html` → Página dedicada ao suporte e contato.  
    - `FAQ.html` → Contém perguntas frequentes sobre o aplicativo.  
    - `integrantes.html` → Apresenta informações sobre os desenvolvedores do projeto.  
    - `tutorial.html` → Um guia prático para acessar e utilizar o aplicativo do hospital.
    - 
    - **login/** → Subpasta com as páginas relacionadas à autenticação e navegação do usuário:
        - `cadastro.html` → Tela de cadastro de novos usuários.
        - `login.html` → Página de login do sistema.
        - `menu.html` → Menu principal exibido após o login.
        - 
        - **logado/** → Subdiretório dentro de `login/`, contendo páginas específicas para usuários autenticados:
            - `agenda.html` → Visualização da agenda de consultas do usuário.
            - `agendamento.html` → Tela para agendamento de consultas.
            - `feedback.html` → Página para envio de feedbacks sobre o atendimento.

- `index.html` → Arquivo HTML que serve como a página inicial do site.

- **README.md** → READ.ME do projeto


## React + Vite + Typescript

**Assets/**: A pasta assets/ armazena imagens, ícones e CSS global.

**Components/**: O projeto possui três componentes reutilizáveis: Cabecalho, Menu e Footer.

**Routes/**: Cada página tem sua própria pasta com index.jsx, facilitando manutenção e organização.

**CSS/**: O Tailwind CSS é usado junto com geral.css para estilização global.

- `App.jsx` controla todas as rotas do projeto.

- `main.jsx` renderiza o App no DOM.

---

## 🚀 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- **HTML** – Para a estruturação das páginas do site.
- **CSS** – Para a estilização e design visual do projeto.
- **JavaScript** – Para adicionar interatividade e funcionalidades dinâmicas.
- **React** - Para criar interfaces modernas e interativas.
- **Bootstrap** - Para criar interfaces responsivas rapidamente.
- **Tailwind CSS** - Para construir designs customizados.
- **TypeScript** - Para tornar o código mais robusto e fácil de dar manutenção.
- **Vite** - Para transformar o código do desenvolvedor em algo que o navegador pode executar

---

## 👥 Integrantes do ADSOS
- Amandha Yumi Toyota Artulino - RM: 563549
- Giovanna Bardella Gomes - RM: 561439
- Erick Takeshi Nakajune - RM: 566059

---

## 🔗 Link do Repositório
O link do repositório é: https://github.com/ADSOSchallenge/Challenge.git
