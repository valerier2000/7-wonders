import React from "react";

function PlayerSelect({ numPlayers, setNumPlayers }) {
  const playerNumbers = [3, 4, 5, 6, 7];

  function handleChange(e) {
    setNumPlayers(e.target.value);
  }

  return (
    <div>
      <label htmlFor="players">Select number of players: </label>
      <select id="players" value={numPlayers} onChange={handleChange}>
        <option value="" disabled>
          Select
        </option>
        {playerNumbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PlayerSelect;
