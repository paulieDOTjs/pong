import React from "react";
// import "./styles.css";
import Paddle from "./components/Paddle/Paddle";
import Ball from "./components/Ball/Ball";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Ball />
      <Paddle />
      <Paddle isPlayerTwo />
    </div>
  );
}
