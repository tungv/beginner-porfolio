"use client";

import { useState } from "react";

export default function Home() {
  const [currentValue, setCurrentValue] = useState("");

  function addNumber(number: string) {
    setCurrentValue(currentValue + number);
  }

  return (
    <div>
      <h1>Calculator</h1>

      <div className="calculator">
        <div>
          <input type="text" className="input" value={currentValue} />
        </div>

        <div className="button-panel">
          <button
            className="button"
            onClick={() => {
              addNumber("7");
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={() => {
              addNumber("8");
            }}
          >
            8
          </button>
          <button
            className="button"
            onClick={() => {
              addNumber("9");
            }}
          >
            9
          </button>

          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>

          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>

          <button className="button">+</button>
          <button className="button">0</button>
          <button className="button">=</button>
        </div>
      </div>
    </div>
  );
}
