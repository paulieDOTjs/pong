import React, { useState, useEffect } from "react";
import Paddle from "./components/Paddle/Paddle";
import Ball from "./components/Ball/Ball";
import "./App.css";

export default function App() {
  const [paddleOneY, setPaddleOneY] = useState(0);
  const [paddleTwoY, setPaddleTwoY] = useState(0);

  function keepInBox(value) {
    if (value < 0) {
      value = 0;
    }
    if (value > 85) {
      value = 85;
    }
    return value;
  }

  function handleKey(e) {
    const char = e.key.toLowerCase();
    if (char === "w" || char === "s") {
      setPaddleOneY(keepInBox(paddleOneY + (char === "w" ? -5 : 5)));
    }
    if (char === "p" || char === "l") {
      setPaddleTwoY(keepInBox(paddleTwoY + (char === "p" ? -5 : 5)));
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", handleKey);
    return () => window.removeEventListener("keypress", handleKey);
  }, [paddleTwoY, paddleOneY]);

  return (
    <div className="App">
      <Ball />
      <Paddle paddleY={paddleOneY} />
      <Paddle isPlayerTwo paddleY={paddleTwoY} />
    </div>
  );
}
