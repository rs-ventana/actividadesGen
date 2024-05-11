import {Routes, Route} from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar.jsx";
import Hero from "./componentes/hero/Hero.jsx";
import Astros from "./componentes/astros/Astros.jsx";
import About from "./componentes/about/About.jsx";
import "./App.css";


/* devuelve un jsx para la app */
function App() { 
  const links = [
  {
    id: 1,
    text: "home",
    link:"/",
  },
  {
    id: 2,
    text: "apod",
    link: "/apod",
  },
  {
    id: 3,
    text: "astros",
    link: "/astros",
  },
  {
    id: 4, 
    text: "about",
    link: "/about",
  },
];


/* enlaces para la barra de navegacion */
  return (
    <>
    <Navbar header = "Navbar" links = {links} />
    <Routes>
      <Route element={<Hero/>} path = "/" />
      <Route element={<Astros/>} path = "/astros" />
      <Route element={<About/>} path = "/about" />
     </Routes>
    </>
  );
}

export default App;
 
 /* englobar los elementos que van a cambiar*/ 

