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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "cadastro", element: <Faq /> },
      { path: "editar/cadastros/:id", element: <Contato /> },
      { path: "faq", element: <Tutorial /> },
      { path: "contato", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
