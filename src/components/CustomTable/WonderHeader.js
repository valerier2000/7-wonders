import React from "react";

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
        <th>Type/Name</th>
        {makePlayerNames()}
      </tr>
    </thead>
  );
}

export default WonderHeader;
