import type { JSX } from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="header-bg">
      <h1 className="header-title">Minha Aplicação</h1>
      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/integrantes" className="nav-link">Integrantes</Link>
          </li>
          <li className="nav-item">
            <Link to="/cadastro" className="nav-link">Cadastros</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
