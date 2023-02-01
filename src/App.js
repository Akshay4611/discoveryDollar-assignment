import Navbar from "./Navbar/Navbar.jsx"
import Crousel from "./Navbar/Crousel"
import './App.css';
import Footer from "./Footer.js";
import {Navitems} from './Navitems'
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Navitems/>
      </header>
      <Crousel/>
      <Footer/>
    </div>
  );
}

export default App;
