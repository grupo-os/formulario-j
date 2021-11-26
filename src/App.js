import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Des from "./pages/Des";

function App() {

  return (
    <>
    <Navbar/>
    <Des/>
    </>
  );
}

export default App;
