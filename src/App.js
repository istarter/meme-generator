import React, { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(value + 1);
  };
  const decValue = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <Header />
      <Meme />
      <button onClick={incrementValue}>Increment</button>
      <p>{value}</p>
      <button onClick={decValue}>Decrement</button>
    </div>
  );
}

export default App;
