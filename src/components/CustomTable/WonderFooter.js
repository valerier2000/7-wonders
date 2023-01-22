import React from "react";

function WonderFooter(props) {
  function makeResultLabels() {
    const resultLabels = [];

    for (let i = 0; i < props.numberOfPlayers; i++) {
      const item = <th>333</th>;
      resultLabels.push(item);
    }
    return resultLabels;
  }

  return (
    <tfoot>
      <tr>
        <td>Sum</td>
        {makeResultLabels()}
      </tr>
    </tfoot>
  );
}

export default WonderFooter;
