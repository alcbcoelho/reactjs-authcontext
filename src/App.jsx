import { useContext } from "react";   // hook p/ usar contextos
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Equivalente do Redux ao hook useContext
import { useSelector } from "react-redux";

// BrowserRouter: possibilita a navegação do browser dentro do React
// Routes: possibilita o cadastro das rotas da aplicação
// Route: uma rota individual, com propriedades/props para o caminho ('path') e o componente a ser renderizado ('element') (ver abaixo)

const App = () => {
  const { loggedIn } = useSelector((state) => state.auth);  

  return (
    <BrowserRouter>
      <Routes>
        {
          loggedIn ?  // se tiver logado...
          <>
            <Route path="/" element={<Layout />}>
              <Route index /* index: o path é o mesmo que o definido no elemento Route pai ("") */ element={<Home />} />
              <Route path="perfil/:id" /* na prática: = /perfil (herda a barra do elemento Route pai)*/ element={<Perfil />} />
            </Route>
          </>
          // ... possibilitar o acesso a essas rotas.
          :   // caso contrário...
          <Route path="/login" element={<Login />} />
          // ... possibilitar o acesso apenas à rota de login
        }
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
