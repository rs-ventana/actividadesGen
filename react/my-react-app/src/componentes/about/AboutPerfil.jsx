import "./About";

const PerfilCard = ({ nombre, correo, contacto, descripcion, foto }) => {
  return (
    <div className="perfil-card">
      <img src={foto} alt={`Foto de ${nombre}`} />
      <div className="perfil-info">
        <h2>{nombre}</h2>
        <p>Correo: {correo}</p>
        <p>Contacto: {contacto}</p>
        <p>Descripción: {descripcion}</p>
      </div>
    </div>
  );
};

export default PerfilCard;