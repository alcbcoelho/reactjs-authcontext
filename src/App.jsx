import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// BrowserRouter: possibilita a navegação do browser dentro do React
// Routes: possibilita o cadastro das rotas da aplicação
// Route: uma rota individual, com propriedades/props para o caminho ('path') e o componente a ser renderizado ('element') (ver abaixo)

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);  // inicialmente, o usuário não está logado na aplicação

  function handleLogin(e) {
    setLoggedIn(true);
  }

  function handleLogout(e) {
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          loggedIn ?  // se tiver logado...
          <>
          <Route path="/" element={<Home onLogout={handleLogout}/>} />
          <Route path="/perfil" element={<Perfil onLogout={handleLogout}/>} />
          </>
          // ... possibilitar o acesso a essas rotas.
          :   // caso contrário...
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
          // ... possibilitar o acesso apenas à rota de login
        }
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
