import React, { useState } from "react";
import MamesData from "../MemesData";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImage, setAllMemeImage] = useState(MamesData);

  const getMemeImage = () => {
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMame) => ({
      ...prevMame,
      randomImage: url,
    }));
  };

  // const getMemeImage = () => {
  //   setMeme(prevousStae => ({
  //     topText: "Hello how are you"
  //   }))
  // }

  return (
    <main>
      <div className="form">
        <input type={"text"} className="form-input" placeholder="Top Text" />
        <input type={"text"} className="form-input" placeholder="Bottom Text" />
        <button onClick={getMemeImage} className="form-button">
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </main>
  );
};

export default Meme;
