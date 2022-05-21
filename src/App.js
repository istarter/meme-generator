import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  const changeMind = () => {
    setIsGoingOut((prevState) => !prevState);
  };

  return (
    <div>
      <Header />
      <Meme />

      <div onClick={changeMind} className="state">
        <h1 className="state-title">Do I feel like going out tonight?</h1>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
