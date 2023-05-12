import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate(); // useNavigate: hook que gera um objeto (navigate) que é posteriormente chamado como uma função
  const refInputEmail = useRef();   // useRef: hook p/ referenciar elemento HTML/componente cuja propriedade "ref" corresponda à variável;
  const refInputSenha = useRef();
  const [ errorEmail, setErrorEmail ] = useState();

  function handleBlurInputEmail(event) {
    if (refInputEmail.current.value.length === 0) {
      refInputEmail.current.focus()
      setErrorEmail("Email é obrigatório")
     } else setErrorEmail(null);
  }

  function handleSubmit(event) {  // evento 'submit' é disparado mesmo se o botão dentro das tags <form> não for tecnicamente um input com type="submit"
    event.preventDefault();   // cancela o refresh que por padrão ocorre durante um evento 'submit'
    handleBlurInputEmail(event);
  }

  function handleClick(event) {
    props.onLogin(event);
    navigate("/"); // faz com que a rota atual mude para a rota principal
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" name="email" ref={refInputEmail}/>
        {errorEmail && <p>{errorEmail}</p>}
        <label htmlFor="senha">Senha: </label>
        <input type="password" id="senha" name="senha" ref={refInputSenha} />
        <button>Entrar</button>
      </form>
    </>
  );
};

export default Login;
