import React from "react";

interface CampoFormulario {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

interface FormularioProps {
  titulo?: string;
  campos: CampoFormulario[];
  botaoTexto?: string;
  valores: Record<string, string>; // estado externo
  setValores: (novosValores: Record<string, string>) => void;
  onSubmit: (dados: Record<string, string>) => void;
}

const Formulario: React.FC<FormularioProps> = ({
  titulo,
  campos,
  botaoTexto = "Enviar",
  valores,
  setValores,
  onSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(valores);
  };

  return (
    <form onSubmit={handleSubmit}>
      {titulo && <h2>{titulo}</h2>}

      {campos.map((campo) => (
        <div key={campo.name}>
          <label>{campo.label}</label>
          {campo.type === "select" ? (
            <select
              name={campo.name}
              value={valores[campo.name] || ""}
              onChange={handleChange}
              required={campo.required}
            >
              {campo.placeholder
                ?.split("/")
                .map((opcao) => (
                  <option key={opcao} value={opcao.trim()}>
                    {opcao.trim()}
                  </option>
                ))}
            </select>
          ) : (
            <input
              type={campo.type || "text"}
              name={campo.name}
              placeholder={campo.placeholder}
              value={valores[campo.name] || ""}
              onChange={handleChange}
              required={campo.required}
            />
          )}
        </div>
      ))}

      <button type="submit">{botaoTexto}</button>
    </form>
  );
};

export default Formulario;
