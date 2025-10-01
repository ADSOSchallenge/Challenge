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
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/tutorial" className="nav-link">Tutorial</Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-link">Contato</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-link">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
