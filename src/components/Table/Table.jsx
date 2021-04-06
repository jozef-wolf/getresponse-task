import React from "react";
import styled from "styled-components";
import Print from "../imgs/print.svg";
import RoundedRectangle from "../imgs/rounded-rectangle.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
// import Check from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";

// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";

const StyleTable = styled.table`
  width: 978px;
  height: 580px;
  border-collapse: collapse;
  text-align: center;
  color: black;
  background-image: url(${RoundedRectangle});
  @media (max-width: 768px) {
    display: none;
  }

  th {
    width: 85px;
  }
  .meals__column {
    width: 126px;
    border-left: 2px solid #828282;
    border-bottom: 2px solid #828282;
    border-left: 2px solid #828282;
  }
  tbody tr:nth-child(n + 2):nth-child(-n + 6) {
    height: 90px;
    font-size: 12.5px;
    word-wrap: break-word;
  }
  tbody tr:first-child {
    height: 50px;
  }
  tbody tr:last-child {
    height: 35px;
  }
  .header__column {
    border-bottom: 2px solid #828282;
  }
  tbody tr:nth-child(7) {
    height: 35px;
  }
  .carb__row {
    border-left: 2px solid #828282;
  }

  .workout__row {
    height: 33px;
    border-left: 2px solid #828282;
    border-right: 2px solid #828282;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
      <StyleTable>
        <tbody>
          {rowHeaders.map((header, index) => (
            <tr key={header}>
              <th className="header__column">{header}</th>
              {index !== rowHeaders.length - 1 ? (
                <>
                  {meals.slice(0, 7).map((meal) => (
                    <td key={meal.id} className="meals__column">
                      {meal[columnKeys[index]]}
                    </td>
                  ))}
                </>
              ) : (
                <>
                  {meals.slice(0, 6).map((meal) => (
                    <td key={meal.id} className="meals__column">
                      {meal[columnKeys[index]]}
                    </td>
                  ))}
                  <td className="carb__row" rowSpan={2}>
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
              <td className="workout__row" key={id}>
                <img src={DumbbellGrey} alt="" />
              </td>
            ))}
          </tr>
        </tbody>
      </StyleTable>
    </>
  );
};

export default Table;
// const freeDay = meals.map(function (meal) {
//   if (meal.sixAM === false) {
//     meal.sixAM = "GUILT-FREE DAY";
//   }
//   return meal;
// });
