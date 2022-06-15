import React from "react";
import style from "./die.css";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div onClick={props.holdDice} className="die-face" style={styles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
};

export default Die;

// const styles = {
//   diceFace: {
//     height: "50px",
//     width: "50px",
//     boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: "10px",
//     backgroundColor: "white",
//   },
//   dieNum: {
//     fontSize: "2rem",
//   },
// };
