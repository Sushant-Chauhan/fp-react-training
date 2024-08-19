import React from "react";
import useCounter from "./usecounter";

function CounterTwo() {
  const [count, handleIncrement, handleReset, handleDecrement] = useCounter(
    10,
    10
  );

  return (
    <div className="counter">
      <h3>Counter Two: {count}</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CounterTwo;
