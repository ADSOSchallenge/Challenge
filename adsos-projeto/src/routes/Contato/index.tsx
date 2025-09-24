

export default function Contato() {
  document.title = "Contato";




  return (
    <main>
        <section>
            <h2>Formulário para contato</h2>
            <p>
                Está com alguma dúvida específica? Entre em contato com a gente, ou preencha o formulário abaixo
                para que possamos retornar o mais breve possível.
            </p>

                <form id="formContato" aria-label="Formulário de contato">
                    <fieldset>
                        <legend>Dados Pessoais:</legend>

                    <div className="">
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" id="idNome" name="nome" placeholder="Digite seu nome..." required/>
                    </div>
                    <div>
                        <label htmlFor="idEmail">E-mail:</label>
                        <input type="email" id="idEmail" name="email" placeholder="Digite seu e-mail..." required
                            maxLength={50}/>
                    </div>
                    <div>
                        <label htmlFor="idPerg">Dúvida:</label>
                        <input type="text" id="idPerg" name="pergunta" placeholder="Digite sua dúvida..." required/>
                    </div>
                    <div>
                        <button aria-label="Botão de enviar contato" type="submit" id="enviarbt">Enviar!</button>
                    </div>
                </fieldset>
            </form>
            <p>
                Quer falar diretamente com o ADSOS? Mande um e-mail para
                <a href="mailto:adsoschallenge@gmail.com"
                    aria-label="Enviar e-mail para ADSOS">adsoschallenge@gmail.com</a>.
            </p>
        </section>
    </main>
  );
}

