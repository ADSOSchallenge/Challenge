import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/Error"; 
import Home from "./routes/Home";
import Integrantes from "./routes/Integrantes";
import Cadastro from "./routes/Cadastro";
import EditarCadastros from "./routes/EditarCadastros";
import Faq from "./routes/Faq";
import Contato from "./routes/Contato";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "editar/cadastros/:id", element: <EditarCadastros /> },
      { path: "faq", element: <Faq /> },
      { path: "contato", element: <Contato /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
