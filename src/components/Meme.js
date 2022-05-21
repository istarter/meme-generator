import React, { useState } from "react";
import MamesData from "../MemesData";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memesArray = MamesData.data.memes;
    console.log(memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img src={memeImage} className="meme-image" />
    </main>
  );
};

export default Meme;
