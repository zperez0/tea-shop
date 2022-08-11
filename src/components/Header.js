import React from "react";
import irohImage from "./../img/iroh.png";

function Header() {
  return (
    <div>
      <img src={irohImage} alt="Iroh's tea shop logo" className="img"/>
    </div>
  );
}

export default Header;
