import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Des from "./pages/Des";
import Home from "./pages/Home";
import Formulario from "./pages/FormularioProductos";

function App() {
  const Routing = () => {
    return(
      <switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/des" component={Des} />
      <Route exact path="/formulario" component={Formulario} />
    
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
