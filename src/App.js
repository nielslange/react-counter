import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>
      <p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={counter <= 0}>
          Decrement
        </button>
      </p>
    </div>
  );
}

export default App;
