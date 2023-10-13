import CountNumber from "./components/CountNumber";
import { useState } from "react";

function App() {
  //let number = 10;
  const [number, setNumber] = useState(10);
  const suma = () => {
    // number = number + 1;
    setNumber(number + 1);
  };
  const resta = () => {
    // number = number - 1;
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <p>numero:</p>
      <CountNumber number={number} />
      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
    </div>
  );
}

export default App;
