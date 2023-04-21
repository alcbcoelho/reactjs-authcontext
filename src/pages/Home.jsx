import Navbar from "../components/Navbar";

const Home = (props) => {
    return (
      <>
      <Navbar onLogout={props.onLogout} />
      <h1>Home</h1>
      </>
    )
  }
  
  export default Home;