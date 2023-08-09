import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Slider from './component/slider';
import Productlist from './component/productlist';
import { Routes ,Route } from 'react-router-dom';
import About from "./component/About"
import Contact from './component/Contact';
import Productdetils from './component/Productdetiles';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<>
      <Navbar/>
        <Slider/>
        <Productlist/>
      </>
      } />
      <Route path="/about" element={<>
        <Navbar/>
        <About/>
      </>
      }/>
      <Route path="/contact" element={<>
        <Navbar/>
        <Contact/>
      </>}/>
      <Route path="product/:productId" element={<>
        <Navbar/>
        <Productdetils/>
      </>}/>
    </Routes>

    </div>
  );
}

export default App;
