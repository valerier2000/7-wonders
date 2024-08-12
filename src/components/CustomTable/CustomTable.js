import React, { useState } from "react";
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

function CustomTable({ isCalculated, numPlayers }) {
  const numberOfPlayers = numPlayers;
  const [users, setUsers] = useState(makeUsers());

  function makeUsers() {
    return [{}, {}, {}, {}, {}];
  }

  const categories = [
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

  function makeBody() {
    const rows = categories.map((category) => {
      return (
        <tr>
          <td
            style={{
              backgroundColor: category.bgColor,
            }}
          >
            {category.icon}
          </td>
          {makePointFields(category)}
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }

  function makePointFields(props) {
    const pointFields = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      function handleOnChange(event) {
        setUsers((prevUsers) => {
          const user = prevUsers[i];
          user[event.target.name] = event.target.value;
          return prevUsers;
        });
      }

      const item = (
        <td>
          <input type="number" name={props.name} onChange={handleOnChange} />
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
      <WonderFooter numberOfPlayers={numberOfPlayers} usersArray={users} />
    </table>
  );
}

export default CustomTable;
