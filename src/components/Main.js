import { useState } from "react";
import CustomTable from "./CustomTable/CustomTable";
import PlayerSelect from "./PlayerSelect";

function Main() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [numPlayers, setNumPlayers] = useState(3);

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
    <div className="main">
      <PlayerSelect numPlayers={numPlayers} setNumPlayers={setNumPlayers} />

      <CustomTable isCalculated={isCalculated} numPlayers={numPlayers} />
      <div className="buttons">
        <button onClick={calculate}>Who won?</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Main;
