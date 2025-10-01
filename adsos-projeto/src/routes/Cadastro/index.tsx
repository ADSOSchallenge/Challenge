import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TipoCadastro = {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
};

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [formData, setFormData] = useState<TipoCadastro>({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    tipo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.cpf || !formData.email || !formData.senha || !formData.tipo) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!/^\d{11}$/.test(formData.cpf)) {
      alert('CPF deve conter exatamente 11 números.');
      return;
    }

    if (formData.senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    const usuariosSalvos = localStorage.getItem('usuarios');
    const usuarios: TipoCadastro[] = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

    const usuarioExistente = usuarios.find(user => 
      user.email.toLowerCase() === formData.email.toLowerCase()
    );
    
    if (usuarioExistente) {
      alert('E-mail já cadastrado. Tente fazer login.');
      return;
    }

    usuarios.push(formData);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('usuarioLogado', JSON.stringify(formData));

    alert('Cadastro realizado com sucesso!');
    
    setFormData({
      nome: "",
      cpf: "",
      email: "",
      senha: "",
      tipo: "",
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Cadastro</h1>
      </header>

      <section className="flex-1 py-8 px-4">
        <h2 className="section-title mb-8">Bem-vindo à página de cadastro</h2>
        
        <form onSubmit={handleSubmit} className="form-container max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="idNome" className="block text-black font-medium mb-2">Nome:</label>
            <input
              type="text"
              id="idNome"
              name="nome"
              placeholder="Digite seu nome..."
              value={formData.nome}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="idCpf" className="block text-black font-medium mb-2">CPF:</label>
            <input
              type="text"
              id="idCpf"
              name="cpf"
              placeholder="Digite seu CPF..."
              value={formData.cpf}
              onChange={handleChange}
              required
              maxLength={11}
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="idEmail" className="block text-black font-medium mb-2">Email:</label>
            <input
              type="email"
              id="idEmail"
              name="email"
              placeholder="Digite seu email..."
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="idSenha" className="block text-black font-medium mb-2">Senha:</label>
            <input
              type="password"
              id="idSenha"
              name="senha"
              placeholder="Digite uma senha de 8 dígitos..."
              value={formData.senha}
              onChange={handleChange}
              required
              maxLength={8}
              className="form-input"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="idTipo" className="block text-black font-medium mb-2">Tipo de Usuário:</label>
            <select
              id="idTipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Selecione</option>
              <option value="medico">Médico</option>
              <option value="paciente">Paciente</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="form-button"
          >
            Cadastrar
          </button>
        </form>
      </section>

      <section className="text-center py-4">
        <p id="pcadastro" className="text-black mb-4">Já tem uma conta?</p>
        <Link 
          className="crieaqui inline-block" 
          to="/login" 
          aria-label="Ir para a página de login">
          Faça Login Aqui!
        </Link>
      </section>
    </main>
  );
}