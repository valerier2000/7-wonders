import React from "react";
import WonderHeader from "./WonderHeader";
import WonderFooter from "./WonderFooter";
import "./CustomTable.css";
import { BiPyramid } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { TbRectangleVertical } from "react-icons/tb";
import { TbCircle } from "react-icons/tb";
import { TbTriangle } from "react-icons/tb";
import { TbStar } from "react-icons/tb";

function CustomTable(props) {
  const numberOfPlayers = 4;

  const categories = [
    <BiPyramid size={40} color="#F6C461" />,
    <BsCoin size={40} color="#FFBC15" />,
    <GiCrossedSwords size={40} color="#F23E50" />,
    <TbRectangleVertical
      size={30}
      color="#4f4d51"
      bgColor="#00aee2"
      fill="#B9E1F1"
    />,
    <TbCircle size={30} color="#4f4d51" bgColor="#FFB722" fill="#FFE3C9" />,
    <TbTriangle size={30} color="#4f4d51" bgColor="#5DB76C" fill="#CEE4C9" />,
    <TbStar size={30} color="#4f4d51" bgColor="#8C86C0" fill="#D2D2E9" />,
  ];

  function makeBody() {
    const rows = categories.map((category) => {
      return (
        <tr>
          <td
            style={{
              backgroundColor: category.props.bgColor,
              fill: category.props.fill,
            }}
          >
            {category}
          </td>
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
          <input type="number" />
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
