import React from "react";
import Die from "./Die";
import style from "./tenzies.css";

const Tenzies = () => {
  return (
    <main>
      <div className="dice-container">
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
        <Die value={"1"} />
      </div>
    </main>
  );
};

export default Tenzies;
