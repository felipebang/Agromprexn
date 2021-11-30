
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Components/Index.js'
import Navbarapp from './Components/Navbar/Navbarapp';
import Section from './Components/Section/Section';
import Tarjetas from './Components/Card/Tarjetas';
import Galeria from './Components/Galeria/Galeria';
import Footer from './Components/Footer/Footer';
import Login from './Components/Registro/Login';
import Formulario from './Components/Registro/Formulario';
import {  Route, Routes } from 'react-router-dom';










function App() {
  return (
    <div>
       
  <Routes>
  <Route path='/Formulario/*'  element={<Formulario />} />
  <Route path='/Formulario'  element={<Login />} />
  </Routes>
  <Index />
  <Navbarapp />
  <Section />
  <Tarjetas />
  <Galeria />
  <Footer />
  <div>

  




  </div>

  
  
  

  
  
  
  
 
   
         
      
    </div>
  );
}

export default App;
