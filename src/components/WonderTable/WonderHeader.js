import React from "react";
import { GiEgyptianWalk } from "react-icons/gi";

function WonderHeader({ numberOfPlayers }) {
  function makePlayerNames() {
    const playerNames = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const item = (
        <th key={`player-${i}`}>
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

// import React from "react";
// import { GiEgyptianWalk } from "react-icons/gi";

// function WonderHeader({ numberOfPlayers }) {
//   return (
//     <thead>
//       <tr>
//         <th>
//           <GiEgyptianWalk size={40} color="#4f4d51" />
//         </th>
//         {Array.from({ length: numberOfPlayers }).map((_, index) => (
//           <th key={index}>
//             <input type="text" />
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// }

// export default WonderHeader;
