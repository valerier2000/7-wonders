import React from "react";
import { GiEgyptianWalk } from "react-icons/gi";

function WonderHeader(props) {
  function makePlayerNames() {
    const playerNames = [];

    for (let i = 0; i < props.numberOfPlayers; i++) {
      const item = (
        <th>
          <input type="text" />
        </th>
      );
      playerNames.push(item);
    }
    return playerNames;
  }

  return (
    <thead>
      <tr>
        <th>
          <GiEgyptianWalk size={40} color="#4f4d51" />
        </th>
        {makePlayerNames()}
      </tr>
    </thead>
  );
}

export default WonderHeader;
