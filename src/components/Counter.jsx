import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementByOne = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementByOne = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <>
      <h2>Selfwork State Management</h2>
      <p>Counter: {counter}</p>
      <div className="d-flex">
        <button onClick={incrementByOne}>+</button>
        <button onClick={decrementByOne}>-</button>
      </div>
    </>
  );
}
