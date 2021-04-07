import React, { useState } from "react";
import styled from "styled-components";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

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
    justify-content: center;
    width: 100vw;

    background-color: #f8f8f8;
    border-top: 2px solid #c2c2c2;
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
      height: 450px;
      display: flex;
      flex-direction: column;
      > div {
        text-align: center;
      }
      &--data {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        color: #adbb0c;
        font-weight: bold;
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
        .header {
          color: #c2c2c2;
          font-size: 14px;
          height: 100%;
          width: 70px;
        }
        .meal {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
        }
      }
      &--workout {
        border-top: 1px solid #c2c2c2;
        color: #adbb0c;
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
    font-size: 60px;
    display: flex;
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
                      <TiChevronLeft />
                    </button>
                    DAY {meal.id}
                    <button className="right-arrow" onClick={nextWeek}>
                      <TiChevronRight />
                    </button>
                  </div>
                  <div className="box__card--day">
                    <div className="header">{rowHeaders[1]}</div>
                    <div className="meal">{meal.sixAM}</div>
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
