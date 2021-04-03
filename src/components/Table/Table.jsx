import React from "react";
import styled from "styled-components";
import Print from "../imgs/print.svg";
// import { ReactComponent as Check } from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";
import RoundedRectangle from "../imgs/rounded-rectangle.png";

const StyleTable = styled.table`

    width: 978px;
    height: 580px;
    border-collapse: collapse;
    text-align: center;
    color: black;
    background-image: url(${RoundedRectangle});
    

    th {
      width: 85px;
    }
    .meals-column {
      width: 126px;
      border-left: 2px solid #828282;
      border-bottom: 2px solid #828282;
      
     
    }
    tbody tr:nth-child(n + 2):nth-child(-n + 6) {
      height: 90px;
      background-color: red;
      font-size: 12.5px;
      word-wrap: break-word;
    }
    tbody tr:first-child{
    height: 50px;
    }
    tbody tr:last-child {
      background-color: blue;
      height: 35px;
    }
    .header-column {
      background-color: green;
      border-bottom: 2px solid #828282;
    }
    tbody tr:nth-child(7){
    height: 35px;
    }
    .workout-row {
      height: 33px;
      background-color: orange;
      border-left: 2px solid #828282;
      border-right: 2px solid #828282;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
      </StyleTable>
    </>
  );
};

export default Table;
