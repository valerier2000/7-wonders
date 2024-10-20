import React from "react";
import { TbSum } from "react-icons/tb";

function WonderFooter({ numberOfPlayers, playersArray }) {
  function makeResultLabels() {
    const resultLabels = [];
    // console.log("Footer");
    for (let i = 0; i < numberOfPlayers; i++) {
      const player = playersArray[i];
      // console.log(player);
      const result = Object.values(player).reduce((result, currentValue) => {
        return (result += +currentValue);
      }, 0);

      const item = <td>{result}</td>;
      resultLabels.push(item);
    }
    return resultLabels;
  }

  return (
    <tfoot>
      <tr>
        <td>
          <TbSum size={40} color="#4f4d51" />
        </td>
        {makeResultLabels()}
      </tr>
    </tfoot>
  );
}

export default WonderFooter;
