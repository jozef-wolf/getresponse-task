import React from "react";
import styled from "styled-components";
import TableSlider from "./TableSlider";
import Print from "../imgs/print.svg";
import RoundedRectangle from "../imgs/rounded-rectangle.png";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import Happy from "../imgs/happy2x.png";
import FlexCenter from "../FlexCenter";
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
  color: #c2c2c2;
  .table__header {
    &--empty {
      height: 50px;
    }
    &--emptyRow {
      height: 35px;
    }
    &--time {
      height: 90px;
      border-top: 2px solid #c2c2c2;
    }
    &--workout {
      height: 33px;
    }
    div {
      ${FlexCenter};
    }
  }
`;
const TableColumn = styled.div`
  width: 128px;
  color: #c2c2c2;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  div {
    ${FlexCenter};
  }
  .table__column {
    &--day {
      ${FlexCenter};
      height: 50px;
      border-right: 2px solid #c2c2c2;
      font-size: 25px;
      color: #adbb0c;
      text-transform: uppercase;
    }
    &--meal {
      height: 90px;
      border-top: 2px solid #c2c2c2;
      border-right: 2px solid #c2c2c2;
      font-family: Arial;
      font-size: 12.5px;
      text-align: left;
      padding-left: 13px;
      padding-right: 10px;
    }
    &--carb {
      ${FlexCenter};
      height: 33px;
      border-bottom: 2px solid #c2c2c2;
      border-right: 2px solid #c2c2c2;
    }
    &--workout {
      ${FlexCenter};
      height: 35px;
      border-right: 2px solid #c2c2c2;
    }
  }
`;

const Column = styled.div`
  color: #828282;
  .column--day {
    ${FlexCenter};
    height: 50px;
    font-size: 25px;
    text-transform: uppercase;
    color: #adbb0c;
  }
  .column--meal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 126px;
    height: 458px;

    border-top: 2px solid #c2c2c2;
    img {
      transform: rotate(-90deg);
    }
    p {
      color: #c2c2c2;
      font-size: 35px;
      width: 300px;
      text-align: center;
      transform: rotate(-90deg);
    }
  }
  .column--print {
    ${FlexCenter};
    height: 70px;
    color: #c2c2c2;
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
            <div className="table__header--workout">{rowHeaders[7]}</div>
          </div>
        </TableHeader>
        {meals.slice(0, 6).map((meal) => (
          <TableColumn className="table__column" key={meal.id}>
            <div className="table__column--day">Day {meal.id}</div>
            <div className="table__column--meal">{meal.sixAM}</div>
            <div className="table__column--meal">{meal.nineAM}</div>
            <div className="table__column--meal">{meal.twelveAM}</div>
            <div className="table__column--meal">{meal.threePM}</div>
            <div className="table__column--meal">{meal.sixPM}</div>
            <div className="table__column--carb">{meal.Carb}</div>
            <div className="table__column--workout">
              <img src={DumbbellGrey} alt="dumbbell" />
            </div>
          </TableColumn>
        ))}
        <Column>
          <div className="column--day">Day 7</div>
          <div className="column--meal">
            <p>Guilt Free Day</p>
            <img src={Happy} alt="" />
          </div>
          <div className="column--print">
            <img src={Print} alt="" />
            Print
          </div>
        </Column>
      </TableContainer>
    </>
  );
};

export default TableFlex;
