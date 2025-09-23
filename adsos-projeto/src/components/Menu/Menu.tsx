import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="w-48 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
        <li><Link to="/cadastro">Cadastros</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </aside>
  );
}
