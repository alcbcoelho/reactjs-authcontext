import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate(); // useNavigate: hook que gera um objeto (navigate) que é posteriormente chamado como uma função
  const perfil = `perfil/${props.id}`;

  function handleClick(event) {
    props.onLogout(event);
    navigate("/login");
  }

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to={perfil}>Perfil</NavLink>
      </li>
      <button onClick={handleClick}>Sair</button>
    </ul>
  );
};

// Ao invés de usar a tag <a> (o que renderizaria uma nova página), usamos esse componente específico NavLink, que funciona como um <a> adaptado ao paradigma de Single-Page-Application (SPA) do React. O prop "to" referencia a rota para qual o link deve direcionar o usuário

export default Navbar;
