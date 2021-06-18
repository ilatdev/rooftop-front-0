import React, { useState } from "react";
import Counter from "./Counter";

export const CounterForm = () => {
  const [inicial, setInitial] = useState(0);

  const handleInitial = (e) => {
    setInitial(Number(e.target.value));
  };

  return (
    <div>
      <form>
        <input
          placeholder="Ingrese valor inicial"
          type="number"
          onInput={handleInitial}
        />
      </form>
      <Counter start={inicial} />
    </div>
  );
};
