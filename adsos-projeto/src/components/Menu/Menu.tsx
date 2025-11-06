import { Link } from "react-router-dom";

export default function Menu(){
  return (
    <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/integrantes" className="nav-link">Integrantes</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
        <Link to="/contato" className="nav-link">Contato</Link>
        <Link to="/sobre" className="nav-link">Sobre</Link>
        <Link to="/tutorial" className="nav-link">Tutorial</Link>
        <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
}