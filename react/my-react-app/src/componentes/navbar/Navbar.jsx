import "./Navbar.css";
import { Link } from "react-router-dom";

/* tiene dos propiedades: header navbar y links de navegación */
function Navbar({ header, links }) {
    return (
    <nav>
        <div>
            <h2>{header}</h2>
            </div>
            <div>
                {links.map((link) => ( /* permite que los enlaces se generen de forma dinamica */
                <Link className = "link" to={link.link} key={link.id}>  
                    {link. text}
                </Link> /* aplicamos estilos */
            ))}
        </div>
    </nav>
);
}

export default Navbar;

/* hola 
{{ ahi ponen json en la misma linea
    en caso con
    */


