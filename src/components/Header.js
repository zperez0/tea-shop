import React from "react";
import irohImage from "./../img/iroh.png";

function Header() {
  return (
    <React.Fragment>
      <img src={irohImage} alt="Iroh's tea shop logo" className="img" />
    </React.Fragment>
  );
}

export default Header;
