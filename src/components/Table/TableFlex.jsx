import React from "react";
import styled from "styled-components";
// import Print from "../imgs/print.svg";
import RoundedRectangle from "../imgs/rounded-rectangle.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
// import Check from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";

// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";

const TableContainer = styled.table`
  width: 978px;
  height: 580px;
  display: flex;
  flex-direction: row;
  background-image: url(${RoundedRectangle});
`;
const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
  .table__header div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table__header--empty {
    height: 48px;
    border-bottom: 2px solid black;
  }
  .table__header--emptyRow {
    height: 35px;
  }
  .table__header--time {
    height: 90px;
    border-bottom: 2px solid black;
  }
`;
const TableColumn = styled.div`
  width: 128px;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  div {
    border-left: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .table__day {
    height: 48px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
  }
  .table__meal {
    height: 90px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
  }
  .table__carb {
    height: 35px;
    border-bottom: 2px solid black;
  }
  .table__workout {
    height: 33px;
  }
`;

const TableFlex = ({ meals }) => {
  const rowHeaders = [
    "",
    "6:00AM",
    "9:00AM",
    "12:00AM",
    "3:00PM",
    "6:00PM",
    " ",
    "Workout",
  ];
  const freeDay = meals.map(function (meal) {
    if (meal.sixAM === false) {
      meal.sixAM = "GUILT-FREE DAY";
    }
    if (meal.workout === false) {
      return { DumbbellGrey };
    }
    return meal;
  });
  return (
    <TableContainer>
      <TableHeader>
        <div className="table__header" key={rowHeaders}>
          <div className="table__header--empty">{rowHeaders[0]}</div>
          <div className="table__header--time">{rowHeaders[1]}</div>
          <div className="table__header--time">{rowHeaders[2]}</div>
          <div className="table__header--time">{rowHeaders[3]}</div>
          <div className="table__header--time">{rowHeaders[4]}</div>
          <div className="table__header--time">{rowHeaders[5]}</div>
          <div className="table__header--emptyRow">{rowHeaders[6]}</div>
          <div className="table__workout">{rowHeaders[7]}</div>
        </div>
      </TableHeader>
      {meals.slice(0, 7).map((meal) => (
        <TableColumn className="table__column" key={meal.id}>
          <div className="table__day">{meal.id}</div>
          <div className="table__meal">{meal.sixAM}</div>
          <div className="table__meal">{meal.nineAM}</div>
          <div className="table__meal">{meal.twelveAM}</div>
          <div className="table__meal">{meal.threePM}</div>
          <div className="table__meal">{meal.sixPM}</div>
          <div className="table__carb">{meal.Carb}</div>

          <div className="table__workout">
            <img src={DumbbellGrey} alt="dumbbell" />
          </div>
        </TableColumn>
      ))}
    </TableContainer>
  );
};

export default TableFlex;
