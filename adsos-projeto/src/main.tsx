import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import ErrorPage from "./routes/Error"; 
import Home from "./routes/Home";
import Integrantes from "./routes/Integrantes";
import Cadastro from "./routes/Cadastro";
import Faq from "./routes/Faq";
import Contato from "./routes/Contato";
import Tutorial from "./routes/Tutorial";
import Login from "./routes/Login";
import Logado from "./routes/Logado";
import Agenda from "./routes/Agenda";
import Agendamento from "./routes/Agendamento";
import Feedback from "./routes/Feedback";
import Sobre from "./routes/Sobre";
import EditarCadastros from "./routes/Editar";
import DeletarCadastro from "./routes/Deletar";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "faq", element: <Faq /> },
      { path: "contato", element: <Contato /> },
      { path: "tutorial", element: <Tutorial /> },
      { path: "login", element: <Login /> }, 
      { path: "cadastro", element: <Cadastro /> }, 
      { path: "sobre", element: <Sobre /> },
    ],
  },
  {
    path: "/app",
    element: <Logado />, 
    children: [
      { path: "agenda", element: <Agenda /> },
      { path: "agendamento", element: <Agendamento /> },
      { path: "feedback", element: <Feedback /> },
      { path: "editar/:id", element: <EditarCadastros /> },
      { path: "deletar/:id", element: <DeletarCadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);