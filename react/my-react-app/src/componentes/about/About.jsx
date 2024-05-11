import "./About.css";

function Perfil({ perfil }) {
    return (
        <div className="mostrarP">
            <h2>{perfil.Nombre}</h2>
            <h3>{perfil.Correo}</h3>
            <h3>{perfil.Contacto}</h3>
            <p>{perfil.Descripción}</p>
        </div>
    );
}

function About() {
    const perfiles = [
        {
            "Nombre": "Olivia Benson",
            "Correo": "Benson-Olivia@UVE.com",
            "Contacto": "16th Precinct, 27 Madison Avenue, Nueva York, NY",
            "Descripción": "Interpretado por Mariska Hargitay, ha aparecido en 551 episodios." 
        },
        {
            "Nombre": "George Huang",
            "Correo": "MD-Huang-George@UVE.com",
            "Contacto": "16th Precinct, 27 Madison Avenue, Nueva York, NY",
            "Descripción": "Es un psiquiatra forense. Ha aparecido en 230 episodios." 
        },
        {
            "Nombre": "Elliot Stabler",
            "Correo": "Stabler-Elliot@UVE.com",
            "Contacto": "Nueva York, NY",
            "Descripción": "Interpretado por Christopher Meloni. Ahora participa en su propia serie" 
        },
        {
            "Nombre": "Melinda Warner",
            "Correo": "DR-Warner-Melinda@UVE.com",
            "Contacto": "16th Precinct, 27 Madison Avenue, Nueva York, NY",
            "Descripción": "Inicialmente participaba de forma esporádica, su ultima participación fue en 2021." 
        },
        {
            "Nombre": "Odafin Tutuola",
            "Correo": "Tutuola-Odafin@UVE.com",
            "Contacto": "16th Precinct, 27 Madison Avenue, Nueva York, NY",
            "Descripción": "Interpretado por Ice-T, ha aparecido en 528 episodios y también ha aparecido en Rick and Morty " 
        }
    ];

    return (
        <div>
            {perfiles.map((perfil, index) => (
                <Perfil key={index} perfil={perfil} />
            ))}
        </div>
    );
}

export default About;
