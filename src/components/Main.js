import { useState } from "react";
import WonderTable from "./WonderTable/WonderTable";
import PlayerSelect from "./PlayerSelect";
import { MIN_PLAYERS } from "../utils/constants";

function Main() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [numPlayers, setNumPlayers] = useState(MIN_PLAYERS);

  function calculate() {
    // setIsCalculated((prevIsCalculated) => {
    console.log("calculated");
    //   return true;
    // });
  }

  function clear() {
    // setIsCalculated((prevIsCalculated) => {
    console.log("cleared");
    //   return false;
    // });
  }

  return (
    <div className="main">
      <PlayerSelect numPlayers={numPlayers} setNumPlayers={setNumPlayers} />

      <WonderTable isCalculated={isCalculated} numPlayers={numPlayers} />

      <div className="buttons">
        <button onClick={calculate}>Who won?</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Main;
