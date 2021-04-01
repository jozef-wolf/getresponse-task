import React from "react";
// import { ReactComponent as ImportedSVG } from "../imgs/print.svg";
// import { ReactComponent as Check } from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";
import DumbbellGrey from ".../";
// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";

const totalItems = 6;

const items = new Array(totalItems).fill(null);

const Table = ({ meals }) => {
  const rowHeaders = [
    "",
    "6:00AM",
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    " ",
  ];
  const columnKeys = Object.keys(meals[0]);

  return (
    <>
      <table>
        <tbody>
          {rowHeaders.map((header, index) => (
            <tr key={header}>
              <th className="table-header">{header}</th>
              {meals.map((meal) => (
                <td key={meal.id}>{meal[columnKeys[index]]}</td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Workout</td>
            {items.map((_, idx) => (
              <td key={idx}>
                <img src={DumbbellGrey} alt="" />
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
