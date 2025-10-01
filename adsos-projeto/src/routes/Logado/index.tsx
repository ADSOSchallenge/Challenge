// src/routes/DashboardLayout.tsx
import { Link, Outlet } from "react-router-dom";

export default function Logado() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
        <div className="flex justify-between items-center">
          <h1 className="header-title">Minha Área</h1>
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
                <Link to="/" className="nav-link">Sair</Link>
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