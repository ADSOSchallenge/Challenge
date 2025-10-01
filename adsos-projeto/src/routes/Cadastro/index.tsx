import React, { useEffect, useState } from "react";

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
    console.log("Dados do cadastro:", formData);
  };

  return (
    <main>
      <header>
        <h1>Cadastro</h1>
      </header>

      <section>
        <h2>Bem-vindo à página de cadastro</h2>
        <form id="formCadastro" onSubmit={handleSubmit} aria-label="Formulário de cadastro">
          {}
          <div>
            <label htmlFor="idNome">Nome:</label>
            <input
              type="text"
              id="idNome"
              name="nome"
              placeholder="Digite seu nome..."
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          {}
          <div>
            <label htmlFor="idCpf">CPF:</label>
            <input
              type="text"
              id="idCpf"
              name="cpf"
              placeholder="Digite seu CPF..."
              value={formData.cpf}
              onChange={handleChange}
              required
              maxLength={11}
            />
          </div>

          {}
          <div>
            <label htmlFor="idEmail">Email:</label>
            <input
              type="email"
              id="idEmail"
              name="email"
              placeholder="Digite seu email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {}
          <div>
            <label htmlFor="idSenha">Senha:</label>
            <input
              type="password"
              id="idSenha"
              name="senha"
              placeholder="Digite uma senha de 8 dígitos..."
              value={formData.senha}
              onChange={handleChange}
              required
              maxLength={8}
            />
          </div>

          {}
          <div>
            <label htmlFor="idTipoUsuario">Tipo de Usuário:</label>
            <select
              id="idTipoUsuario"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="medico">Médico</option>
              <option value="paciente">Paciente</option>
            </select>
          </div>

          <button aria-label="Botão cadastro" type="submit">Cadastrar</button>
        </form>
      </section>

      <footer>
        <p id="footerp">Produzido por ADSOS - Copyright 2025 © - Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}