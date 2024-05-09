import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar({ header, links }) {
    return (
    <nav>
        <div>
            <h2>{header}</h2>
            </div>
            <div>
                {links.map((link) => (
                <Link className = "link" to={link.link} key={link.id}>
                    {Link. text}
                </Link>
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


