import React, { useState } from "react";
import styled from "styled-components";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const StyledSlider = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .box {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
    border-bottom: 2px solid #c2c2c2;
    .week {
      opacity: 0;
      transition-duration: 1s ease;
    }
    .week.active {
      opacity: 1;
      transition-duration: 1s;
    }

    &__card {
      display: flex;
      flex-direction: column;
      width: 100vw;
      > div {
        width: 100%;
      }
      &--data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 40px;
        color: #adbb0c;
        font-weight: bold;
        border-top: 2px solid #c2c2c2;
        height: 100px;
      }

      &--day:nth-child(7) {
        color: #ff801a;
        font-weight: bold;
      }

      &--day {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #c2c2c2;
        color: black;
        height: 100%;
        height: 50px;
        .header {
          color: #c2c2c2;
          font-size: 14px;
          height: 100%;
          padding: 0 0px 0 10px;
        }
        .meal {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          text-align: right;
          width: 100%;
          font-size: 16px;
          padding-right: 50px;
        }
      }
      &--workout {
        border-top: 1px solid #c2c2c2;
        color: #adbb0c;
        text-align: center;
        p {
          font-size: 20px;
          font-weight: bold;
        }

        img {
          height: 25px;
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    font-size: 40px;
    color: #adbb0c;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const TableSlider = ({ meals, rowHeaders }) => {
  const [current, setCurrent] = useState(0);
  const length = meals.length;

  const nextWeek = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevWeek = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledSlider>
      <div className="box">
        {meals.map((meal, index) => (
          <div
            key={index}
            className={index === current ? "week active" : "week"}
          >
            {index === current && (
              <>
                <div className="box__card">
                  <div className="box__card--data">
                    <button className="left-arrow" onClick={prevWeek}>
                      <FaChevronLeft />
                    </button>
                    <p>DAY {meal.id}</p>
                    <button className="right-arrow" onClick={nextWeek}>
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[1]}</div>
                    <div className="meal">
                      <p>{meal.sixAM}</p>
                    </div>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[2]}</div>
                    <div className="meal">{meal.nineAM}</div>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[3]}</div>
                    <div className="meal">{meal.twelveAM}</div>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[4]}</div>
                    <div className="meal">{meal.threePM}</div>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[5]}</div>
                    <div className="meal">{meal.sixPM}</div>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[6]}</div>
                    <div className="meal">{meal.Carb}</div>
                  </div>
                  <div className="box__card--workout">
                    <p>WORKOUT</p>
                    <img src={DumbbellGrey} alt="dumbbell" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </StyledSlider>
  );
};

export default TableSlider;
