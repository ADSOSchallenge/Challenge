import { Outlet, Link } from "react-router-dom";
import './global.css';

export default function App() {
  return (
    <div>
      <header className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
        <Link to="/sobre">Sobre</Link>
      </header>

      <main className="p-4">
        <Outlet />  
      </main>
    </div>
  );
}
