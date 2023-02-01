import Navbar from "./Navbar/Navbar.jsx"
import Crousel from "./Navbar/Crousel"
import './App.css';
import Footer from "./Footer.js";
import {Navitems} from './Navitems'
import Products from "./Navbar/Products.js";
 import Stories from "./component/Stories.js";

function App() {
  return (
    <div className="App">
      
       <Navbar/>
       <Navitems/>
      <Crousel/>
       <Products/>
       <Stories/>
      <Footer/>
    </div>
  );
}

export default App;
