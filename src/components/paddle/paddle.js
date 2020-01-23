import React from "react";
import "./Paddle.css";

function Paddle({ isPlayerTwo }) {
  return <div className={isPlayerTwo ? "paddle player2" : "paddle player1"} />;
}

export default Paddle;
