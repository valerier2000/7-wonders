import React, { useState } from "react";
import WonderHeader from "./WonderHeader";
import WonderFooter from "./WonderFooter";
import "./WonderTable.css";
import { BiPyramid } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import {
  TbRectangleVertical,
  TbCircle,
  TbTriangle,
  TbStar,
} from "react-icons/tb";

function WonderTable({ isCalculated, numPlayers }) {
  const [players, setPlayers] = useState(createPlayers());

  function createPlayers() {
    return [{}, {}, {}, {}, {}, {}, {}];
  }

  const scoringCategories = [
    {
      name: "wonder",
      icon: <BiPyramid size={40} color="#F6C461" />,
    },
    {
      name: "coins",
      icon: <BsCoin size={40} color="#FFBC15" />,
    },
    {
      name: "war",
      icon: <GiCrossedSwords size={40} color="#F23E50" />,
    },
    {
      name: "blue",
      icon: <TbRectangleVertical size={30} color="#4f4d51" fill="#B9E1F1" />,
      bgColor: "#00aee2",
    },
    {
      name: "yellow",
      icon: <TbCircle size={30} color="#4f4d51" fill="#FFE3C9" />,
      bgColor: "#FFB722",
    },
    {
      name: "green",
      icon: <TbTriangle size={30} color="#4f4d51" fill="#CEE4C9" />,
      bgColor: "#5DB76C",
    },
    {
      name: "purple",
      icon: <TbStar size={30} color="#4f4d51" fill="#D2D2E9" />,
      bgColor: "#8C86C0",
    },
  ];

  function generateTableBody() {
    const rows = scoringCategories.map((category) => {
      return (
        <tr key={category.name}>
          <td
            style={{
              backgroundColor: category.bgColor,
            }}
          >
            {category.icon}
          </td>
          {generatePointsInputFields(category)}
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }

  function generatePointsInputFields(category) {
    const pointFields = [];

    for (let i = 0; i < numPlayers; i++) {
      function handleInputChange(event, i) {
        const { name, value } = event.target;
        setPlayers((prevUsers) => {
          const updatedUsers = [...prevUsers];
          console.log("updatedUsers", updatedUsers);
          updatedUsers[i] = { ...updatedUsers[i], [name]: value };
          console.log("updatedUsers after", updatedUsers[i]);

          return updatedUsers;
        });
      }

      const inputField = (
        <td>
          <input
            type="number"
            name={category.name}
            onChange={handleInputChange}
          />
        </td>
      );
      pointFields.push(inputField);
    }

    return pointFields;
  }

  return (
    <table>
      <WonderHeader numberOfPlayers={numPlayers} />
      {generateTableBody()}
      <WonderFooter numberOfPlayers={numPlayers} playersArray={players} />
    </table>
  );
}

export default WonderTable;
