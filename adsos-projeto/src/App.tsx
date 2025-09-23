import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
      </header>

      <main className="p-4">
        <Outlet /> 
      </main>
    </div>
  );
}
