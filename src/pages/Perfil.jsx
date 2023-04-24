import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";   // hook para extrair parâmetros de rota

const Perfil = (props) => {
  const { id } = useParams();

  return (
    <>
      <h1>Perfil {id}</h1>
    </>
  );
};

export default Perfil;
