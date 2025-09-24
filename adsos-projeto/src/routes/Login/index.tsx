import { Form } from "react-router-dom";

export default function Login(){
    document.title = "Login";

return (

<body>
    <main>
        <section>
            <h2>Bem-vindo à página de login</h2>
            <Form id="htmlFormLogin" aria-label="htmlFormulário de login">
                <div>
                    <label htmlFor="idCpf">CPF:</label>
                    <input type="number" maxLength={11} id="idCpf" name="cpf" placeholder="Digite seu CPF..." required/>
                    <span id="spanCpf" className="error"></span>
                </div>

                <div>
                    <label htmlFor="idSenha">Senha:</label>
                    <input type="password" maxLength={8} id="idSenha" name="senha" placeholder="Digite sua senha..." required/>
                    <span id="spanSenha" className="error"></span>
                </div>

                <button aria-label="Botão de entrar na conta" type="submit">Entrar</button>
            </Form>
        </section>

        <section>
            <p id="plogin">Ainda não tem uma conta?</p>
            <a className="crieaqui" href="../login/cadastro.html" aria-label="Ir para a página de cadastro">Crie Aqui!</a>
        </section>
    </main>

</body>
 );
}