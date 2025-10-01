import { Outlet, Link } from "react-router-dom";
import './global.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="header-bg">
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

      <main className="flex-1 p-4">
        <Outlet />  
      </main>
    </div>
  );
}