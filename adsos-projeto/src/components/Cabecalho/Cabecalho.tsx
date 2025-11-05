import logoadsos from "../../assets/adsos.png";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-400 to-green-200 shadow-lg">
      <div>
        <img src={logoadsos} alt="Logo do grupo ADSOS" className="h-14 rounded-md" />
      </div>
      <Menu />
    </header>
  );
}
