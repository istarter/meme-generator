import React from "react";
import TrollFace from "../imgs/troll-face.png";
import "../../src/style.css";
const Header = () => {
  return (
    <header className="header">
      <img src={TrollFace} className="header-image" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-project">React Meme generator</h4>
    </header>
  );
};

export default Header;
