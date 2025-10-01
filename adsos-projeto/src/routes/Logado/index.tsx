
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Usuario = {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  tipo: string;
};

export default function Logado() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
      setUsuario(JSON.parse(usuarioLogado));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="header-title">Minha Área</h1>
            {usuario && (
              <p className="text-white text-sm">
                Olá, {usuario.nome} ({usuario.tipo})
              </p>
            )}
          </div>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/agenda" className="nav-link">Agenda</Link>
              </li>
              <li className="nav-item">
                <Link to="/agendamento" className="nav-link">Agendar</Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className="nav-link">Feedback</Link>
              </li>
              <li className="nav-item">
                <button 
                  onClick={handleLogout}
                  className="nav-link bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}