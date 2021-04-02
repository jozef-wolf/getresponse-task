import React from "react";
import Print from "../../imgs/print.svg";
// import { ReactComponent as Check } from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";
import DumbbellGrey from "../../imgs/DumbbellGrey2x.png";
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
              <th className="header-column">{header}</th>
              {index !== rowHeaders.length - 1 ? (
                meals.slice(0).map((meal) => (
                  <td key={meal.id} className="meals-column">
                    {meal[columnKeys[index]]}
                  </td>
                ))
              ) : (
                <>
                  {meals.slice(0, -1).map((meal) => (
                    <td key={meal.id} className="meals-column">
                      {meal[columnKeys[index]]}
                    </td>
                  ))}
                  <td rowSpan={2}>
                    <span>
                      <img src={Print} alt="" />
                      <p>Print</p>
                    </span>
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr>
            <td>Workout</td>
            {items.map((_, id) => (
              <td className="workout-row" key={id}>
                <img src={DumbbellGrey} alt="" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
