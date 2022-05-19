import React from "react";
import MamesData from "../MemesData";

const Meme = () => {
  const getMemeImage = () => {
    const memesArray = MamesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    // console.log(url);
  };

  const thingsArray = ["Thing 1", "Thing 2"];
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  //   console.log(thingsElements);
  const addItem = () => {
    const newThing = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThing);
    console.log(thingsArray);
  };

  return (
    <main>
      <div className="form">
        <input type={"text"} className="form-input" placeholder="Top Text" />
        <input type={"text"} className="form-input" placeholder="Bottom Text" />
        <button onClick={addItem} className="form-button">
          Get a new meme image
        </button>
      </div>
    </main>
  );
};

export default Meme;
