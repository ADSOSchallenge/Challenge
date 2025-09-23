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
  <main>
  <h1>Editar Cadastro</h1>
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("nome")} placeholder="Nome" />
    <input {...register("cpf")} placeholder="CPF" />
    <input {...register("email")} placeholder="Email" />
    <input {...register("senha")} placeholder="Senha" type="password" />
    <select {...register("tipo")}>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <button type="submit">Atualizar</button>
  </form>
</main>
);
}


