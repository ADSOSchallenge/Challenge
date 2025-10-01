import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Usuario = {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cpf: "",
    senha: "",
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { cpf, senha } = formData;

    if (cpf.length !== 11) {
      alert("CPF deve conter 11 dígitos.");
      return;
    }

    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    const usuariosSalvos = localStorage.getItem("usuarios");
    const usuarios: Usuario[] = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    const usuarioAutenticado = usuarios.find(
      (user) => user.cpf === cpf && user.senha === senha
    );

    if (usuarioAutenticado) {
      alert(`Bem-vindo(a), ${usuarioAutenticado.nome}!`);

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAutenticado));

      navigate("/app"); 
    } else {
      alert("CPF ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Login</h1>
      </header>

      <section className="flex-1 py-8 px-4">
        <h2 className="section-title mb-8">Bem-vindo à página de login</h2>

        <form onSubmit={handleSubmit} className="form-container max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="idCpf" className="block text-black font-medium mb-2">
              CPF:
            </label>
            <input
              type="text"
              maxLength={11}
              id="idCpf"
              name="cpf"
              placeholder="Digite seu CPF..."
              value={formData.cpf}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="idSenha" className="block text-black font-medium mb-2">
              Senha:
            </label>
            <input
              type="password"
              id="idSenha"
              name="senha"
              placeholder="Digite sua senha..."
              value={formData.senha}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <button
            aria-label="Botão de entrar na conta"
            type="submit"
            className="form-button"
          >
            Entrar
          </button>
        </form>
      </section>

      <section className="text-center py-4">
        <p className="text-black mb-4">Ainda não tem uma conta?</p>
        <Link
          className="crieaqui inline-block"
          to="/cadastro"
          aria-label="Ir para a página de cadastro"
        >
          Crie Aqui!
        </Link>
      </section>
    </main>
  );
}
