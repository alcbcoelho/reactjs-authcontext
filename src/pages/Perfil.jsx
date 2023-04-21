import Navbar from "../components/Navbar";

const Perfil = (props) => {
  return (
    <>
    <Navbar onLogout={props.onLogout} />
    <h1>Perfil</h1>
    </>
  )
}

export default Perfil;