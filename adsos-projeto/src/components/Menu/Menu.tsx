import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function Menu(): JSX.Element {
  return (
    <aside className="w-48 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/integrantes" className="nav-link">Integrantes</Link>
        </li>
        <li>
          <Link to="/cadastro" className="nav-link">Cadastros</Link>
        </li>
        <li>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </li>
        <li>
          <Link to="/contato" className="nav-link">Contato</Link>
        </li>
        
      </ul>
    </aside>
  );
}