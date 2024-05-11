import "./About";
import PerfilCard from './PerfilCard'; 
import perfiles from './data/perfiles.json'; 


function About() {
  return (
    <div className="app">
      {perfiles.map((perfil, index) => (
        <PerfilCard
          key={index}
          nombre={perfil.nombre}
          correo={perfil.correo}
          contacto={perfil.contacto}
          descripcion={perfil.descripcion}
          foto={perfil.foto}
        />
      ))}
    </div>
  );
}

export default About;
