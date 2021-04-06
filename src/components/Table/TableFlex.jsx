import React from "react";
import styled from "styled-components";
import Print from "../imgs/print.svg";
import RoundedRectangle from "../imgs/rounded-rectangle.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import TableSlider from "./TableSlider";
// import Check from "../imgs/check.svg";
// import Dumbbell from "../imgs/Dumbbell2x.png";

// import Rectangle from "../imgs/rectangle2x.png";
// // import Happy from "../imgs/happy2x.png";

const TableContainer = styled.div`
  width: 978px;
  height: 580px;
  display: flex;
  flex-direction: row;
  background-image: url(${RoundedRectangle});
  @media (max-width: 768px) {
    display: none;
  }
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

const Freeday = styled.div`
  border: 2px solid black;
  .header {
    height: 50px;
    border: 1px solid black;
  }
  .header__span {
    width: 125px;
    height: 458px;
    border-bottom: 1px solid black;
    p {
      text-align: center;
      transform: rotate(-90deg);
    }
  }
  .header__print {
    height: 70px;
    border: 1px solid black;
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
    <>
      <TableSlider meals={meals} rowHeaders={rowHeaders} />
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
        {meals.slice(0, 6).map((meal) => (
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
        <Freeday className="FreeDay">
          <div className="header">Day 7</div>
          <div className="header__span">
            <p>Guilt Free Day</p>
          </div>
          <div className="header__print">
            <img src={Print} alt="" />
            Print
          </div>
        </Freeday>
      </TableContainer>
    </>
  );
};

export default TableFlex;