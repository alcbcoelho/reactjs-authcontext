import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
    <Navbar />
    <Outlet /> {/* * */}
    </>
  )
}

/*

*: O componente OUTLET referencia o elemento (element) especificado nas rotas filhas da rota em que o componente em que é usado (no caso, o componente Layout).

Exemplo:

<Route path="/" element={<Layout id={userID} onLogout = {handleLogout} />}>
    <Route index element={<Home />} />
    <Route path="perfil/:id" element={<Perfil />} />
</Route>

O que decorre disso é que...

- Na rota raíz ("/"), é renderizado o componente Layout com o componente Outlet referenciando o componente Home
- Na rota "perfil/:id" é renderizado o componente Layout com o componente Outlet referenciando o componente Perfil

*/

export default Layout