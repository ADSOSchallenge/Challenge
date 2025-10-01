import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/Error"; 
import Home from "./routes/Home";
import Integrantes from "./routes/Integrantes";
import Cadastro from "./routes/Cadastro";
import Faq from "./routes/Faq";
import Contato from "./routes/Contato";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Tutorial from "./routes/Tutorial";
import Login from "./routes/Login";
import './global.css'; 
import Logado from "./routes/Logado";
import Agenda from "./routes/Agenda";
import Agendamento from "./routes/Agendamento";
import Feedback from "./routes/Feedback";
import Sobre from "./routes/Sobre";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);