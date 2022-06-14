import React from "react";

const Die = (props) => {
  return (
    <div style={styles.diceFace}>
      <h1 className="dieNum">{props.value}</h1>
    </div>
  );
};

export default Die;

const styles = {
  diceFace: {
    height: "50px",
    width: "50px",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "white",
  },
  dieNum: {
    fontSize: "2rem",
  },
};
