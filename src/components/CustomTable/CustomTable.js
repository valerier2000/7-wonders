import React from "react";
import WonderHeader from "./WonderHeader";
import WonderFooter from "./WonderFooter";

function CustomTable() {
  const numberOfPlayers = 4;

  const categories = [
    "Wonder",
    "Coins",
    "War",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
  ];

  function makeBody() {
    const rows = categories.map((category) => {
      return (
        <tr>
          <td>{category}</td>
          {makePointFields()}
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }

  function makePointFields() {
    const pointFields = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const item = (
        <td>
          <input type="text" name="" id="" />
        </td>
      );
      pointFields.push(item);
    }

    return pointFields;
  }

  return (
    <table>
      <WonderHeader numberOfPlayers={numberOfPlayers} />
      {makeBody()}
      <WonderFooter numberOfPlayers={numberOfPlayers} />
    </table>
  );
}

export default CustomTable;
