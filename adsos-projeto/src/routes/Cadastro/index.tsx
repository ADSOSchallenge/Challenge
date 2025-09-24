import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit as Editar } from "lucide-react"; 

type TipoCadastro = {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
};

const URL_API = import.meta.env.VITE_URL_API_CADASTROS;

export default function Cadastro() {
  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [cadastros, setCadastros] = useState<TipoCadastro[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        const data = await response.json();
        setCadastros(data);
      } catch (error) {
        console.error("Erro ao buscar cadastros:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Cadastros</h1>
      <table className="tblCadastro">
        <thead>
          <tr>
            <th>NOME</th>
            <th>CPF</th>
            <th>E-MAIL</th>
            <th>SENHA</th>
            <th>TIPO DE USUÁRIO</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {cadastros.map((cadastro, index) => (
            <tr key={index}>
              <td>{cadastro.nome}</td>
              <td>{cadastro.cpf}</td>
              <td>{cadastro.email}</td>
              <td>{cadastro.senha}</td>
              <td>{cadastro.tipo}</td>
              <td>
                <Link to={`/editar/cadastros/${cadastro.nome}`}>
                  <Editar className="inline w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
