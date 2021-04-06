import React, { useState } from "react";
import styled from "styled-components";
import DumbbellGrey from "../imgs/DumbbellGrey2x.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const StyledSlider = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 769px) {
    display: none;
  }

  .day__card {
    box-shadow: 4px 2px 2px 5px #dadada;
    border-radius: 40px;
    height: 600px;
    display: flex;
    flex-direction: column;

    > div {
      border-bottom: 2px solid black;
      text-align: center;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  button:hover {
    background-color: #ff801a;
    transition: ease-in 0.5s;
    transform: scale(1.2);
  }
  button {
    width: 40px;
    margin: 2px;
    height: 200px;
    font-size: 200px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #ff801a;
    border: none;
    outline: none;
  }
  .box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .box__week {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      color: #ff801a;
      line-height: 1;
    }
    .box__meal {
      display: flex;
      flex-direction: row;

      color: black;
      align-items: center;
      height: 100%;
      .header {
        border-right: 1px solid black;
        background-color: #dadada;
        font-size: 14px;
        height: 100%;
        width: 70px;
      }
      .meal {
        height: 100%;
        width: 100%;
        text-align: center;
        font-size: 18px;
      }
    }
    .box__workout {
      font-size: 25px;
      .dumbbell {
        height: 25px;
      }
    }
  }
  .week {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .week.active {
    opacity: 1;
    transition-duration: 1s;
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
      <button className="left-arrow" onClick={prevWeek}>
        <BsChevronCompactLeft />
      </button>
      <div className="box">
        {meals.map((meal, index) => (
          <div
            key={index}
            className={index === current ? "week active" : "week"}
          >
            {index === current && (
              <>
                <div className="day__card">
                  <div className="box__week">DAY {meal.id}</div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[1]}</div>
                    <div className="meal">{meal.sixAM}</div>
                  </div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[2]}</div>
                    <div className="meal">{meal.nineAM}</div>
                  </div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[3]}</div>
                    <div className="meal">{meal.twelveAM}</div>
                  </div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[4]}</div>
                    <div className="meal">{meal.threePM}</div>
                  </div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[5]}</div>
                    <div className="meal">{meal.sixPM}</div>
                  </div>
                  <div className="box__meal">
                    <div className="header">{rowHeaders[1]}</div>
                    <div className="meal">{meal.Carb}</div>
                  </div>
                  <div className="box__workout">
                    <div> WORKOUT</div>
                    <img
                      className="dumbbell"
                      src={DumbbellGrey}
                      alt="dumbbell"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <button className="right-arrow" onClick={nextWeek}>
        <BsChevronCompactRight />
      </button>
    </StyledSlider>
  );
};

export default TableSlider;
