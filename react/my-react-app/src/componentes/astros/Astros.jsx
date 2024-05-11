import {useState, useEffect } from "react";
import CircularProgress  from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import "./Astros.css";

/* haciendo la tarjeta/contenedor funciona aqui */
function Astro(props) {
    return (
        <div className = "card">
            <h2>{props.astro.name}</h2>
            <p>{props.astro.craft}</p>
            </div> 
        );
    }
 
function Astros () { /* para que semuestre la info del astronauta actualizado*/
    const [astros, setAstros] = useState();
    const URL = "http://api.open-notify.org/astros.json";

    useEffect (() => {
        async function fetchData(){
        const response = await fetch(URL);
        const data = await response.json();
        setAstros (data.people);
    }
    fetchData ();
}, []);
console.log(astros); /* comprobar que si hay datos*/

return (
    <>
        <Typography variant="h2">Cartas de astronautas en el espacio</Typography>
        <div className="card-container">
            {astros ? (
                astros.map((astro, index) => 
                    <Astro astro={astro} key={index} />)
                ):(
                 <CircularProgress />
            )}
        </div>
    </>
    );
}


export default Astros;