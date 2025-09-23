import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Minha Aplicação</h1>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/cadastro">Cadastros</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
