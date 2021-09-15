import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
  });

  useEffect(() => {
    if (counter == 0) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [counter]);

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
        <button onClick={handleDecrement} disabled={disabled}>
          Decrement
        </button>
      </p>
    </div>
  );
}

export default App;
