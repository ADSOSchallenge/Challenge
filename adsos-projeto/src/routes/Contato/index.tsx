export default function Contato() {
  document.title = "Contato";

  return (
    <main className="min-h-screen p-4">
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Formulário para contato</h2>
        
        <p className="text-gray-600 mb-6">
          Está com alguma dúvida específica? Entre em contato com a gente, ou preencha o formulário abaixo
          para que possamos retornar o mais breve possível.
        </p>

        <form className="bg-white p-6 rounded shadow">
          <fieldset className="border p-4 rounded">
            <legend className="text-lg font-semibold px-2">Dados Pessoais:</legend>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nome:</label>
              <input 
                type="text" 
                name="nome" 
                placeholder="Digite seu nome..." 
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">E-mail:</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Digite seu e-mail..." 
                required
                maxLength={50}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Dúvida:</label>
              <input 
                type="text" 
                name="pergunta" 
                placeholder="Digite sua dúvida..." 
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Enviar!
              </button>
            </div>
          </fieldset>
        </form>

        <p className="text-gray-600 mt-6">
          Quer falar diretamente com o ADSOS? Mande um e-mail para {' '}
          <a href="mailto:adsoschallenge@gmail.com" className="text-blue-500 hover:underline">
            adsoschallenge@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
}