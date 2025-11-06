import logoadsos from "../../assets/adsos.png";
import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header>
      <div>
        <img src={logoadsos} alt="Logo do grupo ADSOS" className="h-14 rounded-md" />
      </div>
      <Menu />
    </header>
  );
}
