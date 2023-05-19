import { createContext, useState } from "react"; // createContext: hook que permite utilização de contextos (variáveis globais)

// invocando o hook: cria-se um objeto com atributos que queremos que tenham escopo global (isso aqui é tipo uma interface de TS)
const AuthContext = createContext({
  userID: null,
  loggedIn: false,
  login: (e) => {},
  logout: (e) => {}
});

export function AuthContextProvider(props) {

    // Estado p/ guardar as informações do usuário
    const [currentUser, setCurrentUser] = useState({
      userID: null,
      loggedIn: false,
    });

    // mudança de estado ao dar login
    function handleLogin(e) {
      setCurrentUser({ userID: 100, loggedIn: true });
    }

    // mudança de estado ao dar logout
    function handleLogout(e) {
      setCurrentUser({ userID: null, loggedIn: false });
    }

    // Objeto context, que exportaremos para o alcance da aplicação como um todo
    const context = {
        userID: currentUser.userID,
        loggedIn: currentUser.loggedIn,
        login: handleLogin,
        logout: handleLogout
    }

    // Componente que possibilitará o uso de contexto, a ser referenciado no arquivo main.jsx
  return (
    <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;