import React, { useState } from "react";
import Count from "./components/Count";
import Header from "./components/Header";
import Meme from "./components/Meme";
import Star from "./components/Star";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevState) => prevState + 1);
  };
  const subtract = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <Header />
      <Meme />
      <button onClick={add}> + </button>
      <button onClick={subtract}> - </button>
      <Count number={count} />
    </div>
  );
}

export default App;
