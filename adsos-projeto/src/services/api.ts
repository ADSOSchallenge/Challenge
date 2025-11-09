import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro de comunicação com a API:", error);
    alert("Erro ao se conectar com o servidor.");
    return Promise.reject(error);
  }
);

export default api;
