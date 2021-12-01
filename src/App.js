import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Des from "./pages/Des";
import Home from "./pages/Home";
import Formulario from "./pages/FormularioProductos";
import Editar from "./pages/FormularioEditarProd";
//import Register from "./pages/Register";

function App() {
  const Routing = () => {
    return(
      <switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/des" component={Des} />
      <Route exact path="/formulario" component={Formulario} />
      <Route exact path="/editar" component={Editar}/>
      {/* <Route exact path="/register" component={Register}/> */}
    
    </switch>
    )
  };
  

  return (
    <>
      <Router>
        <Navbar />
        <Routing/>
      </Router>
    </>
  );
}

export default App;
