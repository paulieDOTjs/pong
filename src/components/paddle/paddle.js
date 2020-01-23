import React from "react";
import "./Paddle.css";

function Paddle({ isPlayerTwo, paddleY }) {

  return (
    <div
      className={isPlayerTwo ? "paddle player2" : "paddle player1"}
      style={{ top: `${paddleY}%` }}
    />
  );
}

export default Paddle;
