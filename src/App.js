import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*Components*/
import Header from "./components/header";
import ItemlistContainer from './components/ItemlistContainer'
import Footer from './components/Footer'
/*views*/
 import Home from './views/Home';
 import Productos from './views/Productos';
 import Ondemand from './views/Ondemand';
 import Servicios from './views/Servicios';
 import Novedades from './views/Novedades';
 import "./App.css";
// import ItemDetails from "./components/itemDetail";

function App() {
  return (
    <Router>
    <div className="App">
        <Header/>
        <div className="Body">
          <Switch>
          <Route exact path="/Home"  component={Home} />
          <Route exact path="/Productos" component={Productos} />
          <Route exact path="/Ondemand" component={Ondemand} />
          <Route exact path="/Servicios" component={Servicios} />
          <Route exact path="/Novedades" component={Novedades} />
          </Switch>
          <ItemlistContainer />
        </div>
        {/* <ItemDetails /> */}
    </div>
    <Footer />
    </Router>
  );
}
export default App;
