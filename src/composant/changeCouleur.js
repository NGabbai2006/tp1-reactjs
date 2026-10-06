import React, { useState } from "react";

function alea() {
  const couleurB = Math.floor(Math.random() * 256);
  const couleurR = Math.floor(Math.random() * 256);
  const couleurV = Math.floor(Math.random() * 256);
  return `rgb(${couleurR}, ${couleurV}, ${couleurB})`;
}
const ChangeCouleur = () => {
  const texte = <h1>PAsse ta souris sur meee!!!!!!e!e!!e</h1>;
  const [couleur, color] = useState();
  return (
    <div onMouseEnter={() => color(alea())} style={{ color: couleur }}>
      {texte}
    </div>
  )
}

export default ChangeCouleur;