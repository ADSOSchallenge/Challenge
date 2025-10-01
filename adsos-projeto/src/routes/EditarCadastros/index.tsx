import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const URL_API = import.meta.env.VITE_URL_API_CADASTROS;

interface TipoCadastro {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
}

export default function EditarCadastros() {
  useEffect(() => {
    document.title = "Editar Cadastros";
  }, []);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, setValue } = useForm<TipoCadastro>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL_API}/${id}`);
      try {
        const data: TipoCadastro = await response.json();
        setValue("nome", data.nome);
        setValue("cpf", data.cpf);
        setValue("email", data.email);
        setValue("senha", data.senha);
        setValue("tipo", data.tipo);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<TipoCadastro> = async (dados) => {
    try {
      await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      alert("Seu cadastro foi atualizado!");
      navigate("/cadastros");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar cadastro!");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="header-bg">
        <h1 className="header-title">Editar Cadastro</h1>
      </header>

      <section className="flex-1 py-8 px-4">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container max-w-md mx-auto">
          <div className="mb-4">
            <input 
              {...register("nome")} 
              placeholder="Nome" 
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <input 
              {...register("cpf")} 
              placeholder="CPF" 
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <input 
              {...register("email")} 
              placeholder="Email" 
              className="form-input"
            />
          </div>

          <div className="mb-4">
            <input 
              {...register("senha")} 
              placeholder="Senha" 
              type="password" 
              className="form-input"
            />
          </div>

          <div className="mb-6">
            <select {...register("tipo")} className="form-input">
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>

          <button type="submit" className="form-button">
            Atualizar
          </button>
        </form>
      </section>
    </main>
  );
}