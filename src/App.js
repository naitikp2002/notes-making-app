import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import {
  BrowserRouter as Router, Route,Routes
} from "react-router-dom";

import Homepage from './Homepage';
import Contactpage from './Contactpage';
import Aboutpage from './Aboutpage';
function App() {

  return (
    <Router>
    <div>
      <NavBar/>
      <Routes>
         <Route exact path="/" element={<Homepage/>}/>
         <Route exact path="/About" element={<Aboutpage/>}/>
         <Route exact path="/Contact" element={<Contactpage/>}/>
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
