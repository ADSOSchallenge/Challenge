import { Form, Link } from "react-router-dom";

export default function Login() {
  document.title = "Login";

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Login</h1>
      </header>

      <section className="flex-1 py-8 px-4">
        <h2 className="section-title mb-8">Bem-vindo à página de login</h2>
        
        <Form id="htmlFormLogin" aria-label="htmlFormulário de login" className="form-container max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="idCpf" className="block text-black font-medium mb-2">CPF:</label>
            <input
              type="number"
              maxLength={11}
              id="idCpf"
              name="cpf"
              placeholder="Digite seu CPF..."
              required
              className="form-input"
            />
            <span id="spanCpf" className="error text-red-500 text-sm"></span>
          </div>

          <div className="mb-6">
            <label htmlFor="idSenha" className="block text-black font-medium mb-2">Senha:</label>
            <input
              type="password"
              maxLength={8}
              id="idSenha"
              name="senha"
              placeholder="Digite sua senha..."
              required
              className="form-input"
            />
            <span id="spanSenha" className="error text-red-500 text-sm"></span>
          </div>

          <button 
            aria-label="Botão de entrar na conta" 
            type="submit"
            className="form-button"
          >
            Entrar
          </button>
        </Form>
      </section>

      <section className="text-center py-4">
        <p id="plogin" className="text-black mb-4">Ainda não tem uma conta?</p>
        <Link 
          className="crieaqui inline-block" 
          to="/cadastro" 
          aria-label="Ir para a página de cadastro"
        >
          Crie Aqui!
        </Link>
      </section>

      <footer className="footer-bg">
        <p className="footer-text">
          Produzido por ADSOS - Copyright 2025 © - Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}