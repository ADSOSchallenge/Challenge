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
    <main className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Cadastro</h1>
      </header>

      <section className="flex-1 p-4">
        <h2 className="text-xl text-gray-800 text-center mb-6">Bem-vindo à página de cadastro</h2>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome..."
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">CPF:</label>
            <input
              type="text"
              name="cpf"
              placeholder="Digite seu CPF..."
              value={formData.cpf}
              onChange={handleChange}
              required
              maxLength={11}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email..."
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Senha:</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite uma senha de 8 dígitos..."
              value={formData.senha}
              onChange={handleChange}
              required
              maxLength={8}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Tipo de Usuário:</label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione</option>
              <option value="medico">Médico</option>
              <option value="paciente">Paciente</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  );
}