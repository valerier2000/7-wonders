import { useState } from "react";
import CustomTable from "./components/CustomTable/CustomTable";
import "./App.css";
import Header from "./components/Header";

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
      <Header />
      <CustomTable isCalculated={isCalculated} />
      <button onClick={calculate}>Who won?</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
