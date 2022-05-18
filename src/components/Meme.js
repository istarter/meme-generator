import React from "react";
import MamesData from "../MemesData";
const Meme = () => {
  const getMemeImage = () => {
    alert("click");
  };

  return (
    <main>
      <div className="form">
        <input type={"text"} className="form-input" placeholder="Top Text" />
        <input type={"text"} className="form-input" placeholder="Bottom Text" />
        <button onClick={getMemeImage} className="form-button">
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
