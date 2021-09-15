import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    document.title = `The counter stands on ${counter}`;
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
    setDisabled(false);
  };
  
  const handleDecrement = () => { 
    if (counter > 0) {
      setCounter(counter - 1)
      setDisabled(false);
    } 

    if (counter === 1) {
      setDisabled(true);
    }
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>
      <p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} disabled={disabled}>Decrement</button>
      </p>
    </div>
  );
}

export default App;
