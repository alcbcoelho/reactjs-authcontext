import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = (props) => {
  const dispatch = useDispatch();   // hook do Redux

  const navigate = useNavigate(); // useNavigate: hook que gera um objeto (navigate) que é posteriormente chamado como uma função
  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;  // o objeto 'register' guarda os atributos "name", "ref" de um elemento input.

  function handleFormSubmit(data) {
    dispatch(login());
    navigate("/"); // faz com que a rota atual mude para a rota principal
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" {...register("email", /* Validadores (melhor que fazer ternários) */ {
          required: { value: true, message: "Email obrigatório" },
          pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Email inválido"}
        }) /* = name="email" ref="{}" */} />
        {errors.email && <p>{errors.email.message}</p>  /* se tem erro no campo 'email', renderizar a respectiva mensagem de erro ("Email obrigatório" ou "email inválido")*/}
        <label htmlFor="senha">Senha: </label>
        <input type="password" id="senha" {...register("senha")}/>
        <button>Entrar</button>
      </form>
    </>
  );
};

export default Login;

// Para mais informações, checar: https://react-hook-form.com/