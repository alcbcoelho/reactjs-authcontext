import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";    // hook useForm, ideal para trabalhar com formulários (ao invés de usar useRef, como foi feito no commit anterior a esse; COMPARAR OS DOIS COMMITS E VER O QUE MUDA)

const Login = (props) => {
  const navigate = useNavigate(); // useNavigate: hook que gera um objeto (navigate) que é posteriormente chamado como uma função
  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;  // o objeto 'register' guarda os atributos "name", "ref" de um elemento input.
  
  function handleClick(event) {
    props.onLogin(event);
    navigate("/"); // faz com que a rota atual mude para a rota principal
  }

  function handleFormSubmit(data) {
    console.log(data)
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