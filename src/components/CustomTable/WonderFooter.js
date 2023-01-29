import React from "react";
import { TbSum } from "react-icons/tb";

function WonderFooter(props) {
  function makeResultLabels() {
    const resultLabels = [];

    for (let i = 0; i < props.numberOfPlayers; i++) {
      const item = <td>333</td>;
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
