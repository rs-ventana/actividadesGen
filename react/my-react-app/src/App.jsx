import {Routes, Route} from "react-router-dom";
import About from "./componentes/navbar/About.jsx"
import Navbar from "./componentes/navbar/Navbar.jsx";
import Hero from "./componentes/hero/Hero.jsx";
import Astros from "./componentes/astros/Astros.jsx";
import "./App.css";



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



  return (
    <>
    <Navbar header = "space-app" links = {links} />
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