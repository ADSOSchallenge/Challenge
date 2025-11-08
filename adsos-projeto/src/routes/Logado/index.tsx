import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import type { Usuario } from "../../types/Usuario";

export default function Logado() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    document.title = "Área Logada";

    const usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };

  return (
    <div className="logado-container">
      <div className="logado-card">
        <p className="logado-nome">Olá, {usuario?.nome || "usuário"}!</p>
        <p className="logado-email">{usuario?.email || "Email não disponível"}</p>

        <nav className="logado-nav">
          <ul>
            <li><Link to="agendamento">Agendar consulta</Link></li>
            <li><Link to="agenda">Minha agenda</Link></li>
            <li><Link to="feedback">Feedbacks</Link></li>
            <li><Link to={`editar/${usuario?.id}`}>Editar minha conta</Link></li>
            <li><Link to={`deletar/${usuario?.id}`}>Deletar minha conta</Link></li>
          </ul>
        </nav>

        <button onClick={handleLogout} className="btn-sair">
          Sair
        </button>
      </div>
      <Outlet />
    </div>
  );
}
