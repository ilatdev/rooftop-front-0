import React, { useState, useEffect } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState();

  // actualizar estado del counter cada vez que cambie props
  useEffect(() => {
    setCounter(props.start);
  }, [props]);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h2>{counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
