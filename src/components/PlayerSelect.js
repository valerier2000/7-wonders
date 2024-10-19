import React from "react";
import { MIN_PLAYERS, MAX_PLAYERS } from "./../utils/constants";

function PlayerSelect({ numPlayers, setNumPlayers }) {
  const playerNumOptions = Array.from(
    { length: MAX_PLAYERS - MIN_PLAYERS + 1 },
    (_, i) => MIN_PLAYERS + i
  );

  function handleNumPlayersChange(e) {
    setNumPlayers(e.target.value);
  }

  return (
    <div>
      <label htmlFor="players">Select number of players: </label>
      <select id="players" value={numPlayers} onChange={handleNumPlayersChange}>
        {playerNumOptions.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlayerSelect;
