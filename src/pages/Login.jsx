import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();   // useNavigate: hook que gera um objeto (navigate) que é posteriormente chamado como uma função
  
  function handleClick(event) {
    props.onLogin(event);
    navigate("/");  // faz com que a rota atual mude para a rota principal
  }

    return (
      <>
      <h1>Login</h1>
      <button onClick={handleClick}>Entrar</button>
      </>
    )
  }
  
  export default Login;