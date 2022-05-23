import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);
  const [thingsArray, setThingsArray] = useState(["Thing1", "Thing2"]);
  const changeMind = () => {
    setIsGoingOut((prevState) => !prevState);
  };

  const addItem = () => {
    setThingsArray((preveState) => [
      ...preveState,
      `Thing ${preveState.length + 1}`,
    ]);
  };
  const thingsElement = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <Header />
      <Meme />

      <div onClick={changeMind} className="state">
        <h1 className="state-title">Do I feel like going out tonight?</h1>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
      <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElement}
      </div>
    </div>
  );
}

export default App;
