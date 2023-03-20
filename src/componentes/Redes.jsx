import React from "react";

function Redes() {
    return(
      <div className="contenedor-principal">
        <img className="imagen-red" src={require("../imagenes/logo.png")} />

        <div className="contenedor-texto-testimonio">
            <p className="nombre-red">Facebook</p>
            <p className="año-lanzamiento">4 de febrero de 2004</p>
            <p className="descripcion-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa voluptatem dolorum cupiditate 
            labore eum aperiam dolor maxime et, totam voluptatibus dignissimos vitae maiores molestias rem, earum non consectetur ab.</p>
        </div>

      </div>
    );
} 

export default Redes;