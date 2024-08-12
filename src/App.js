import { useState } from "react";
import CustomTable from "./components/CustomTable/CustomTable";
import "./App.css";

function App() {
  const [isCalculated, setIsCalculated] = useState(false);

  function calculate() {
    setIsCalculated((prevIsCalculated) => {
      return true;
    });
  }

  function clear() {
    setIsCalculated((prevIsCalculated) => {
      return false;
    });
  }
  return (
    <div>
      <CustomTable isCalculated={isCalculated} />
      <button onClick={calculate}>Who won?</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
