import { useState } from "react";
import { Link } from "react-router-dom";
 
export default function Menu() {
  const [aberto, setAberto] = useState(false);
 
  return (
    <>
      <button 
        className="menu-btn md:hidden" onClick={() => setAberto(!aberto)}>☰</button>
      <nav className={`menu ${aberto ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setAberto(false)}>Home</Link>
        <Link to="/integrantes" className="nav-link" onClick={() => setAberto(false)}>Integrantes</Link>
        <Link to="/faq" className="nav-link" onClick={() => setAberto(false)}>FAQ</Link>
        <Link to="/contato" className="nav-link" onClick={() => setAberto(false)}>Contato</Link>
        <Link to="/sobre" className="nav-link" onClick={() => setAberto(false)}>Sobre</Link>
        <Link to="/tutorial" className="nav-link" onClick={() => setAberto(false)}>Tutorial</Link>
        <Link to="/login" className="nav-link" onClick={() => setAberto(false)}>Login</Link>
      </nav>
    </>
  );
}
