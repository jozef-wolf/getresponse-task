import React from "react";
import styled from "styled-components";
import ArrowRight from "../imgs/arrow.svg";
import ArrowLeft from "../imgs/arrowL.svg";

const StyledBar = styled.div`
  .progress-dots {
    max-width: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 2em;
    height: 2.5em;
  }

  .progress-dots-bar {
    background-color: #444;
    max-width: 495px;
    text-align: left;
    display: block;
    height: 4px;
    margin-top: -21px;
    margin-left: 3px;
  }

  .progress-dot {
    font-family: "Arial", sans-serif;
    display: block;
    background: #444;
    border: 1px solid #444;
    border-radius: 50%;
    width: 0;
    height: 0;
    text-align: center;
    color: transparent;
    font-size: 2em;
    padding: 0.2em;
    position: relative;
    @media all and (min-width: 400px) {
      width: 1em;
      height: 1em;
      font-size: 1em;
      color: #444;
    }
    &--last {
      width: 1em;
      height: 1em;
      color: #ffffff;
      font-size: 1.8em;
    }
    &--current {
      background-color: #ffffff;
      color: #444444;
      width: 1em;
      height: 1em;
      @media all and (min-width: 400px) {
        font-size: 2em;
        display: block;
      }
    }
    &__number {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.6em;
      margin-left: -0.25em;
    }
  }
`;

const StyledWeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  position: relative;
  button {
    width: 24px;
    height: 42px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
    }
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 249px;
    &__week {
      width: 160px;
      height: 36px;
      font-size: 47px;
      color: #ff801a;
      line-height: 1;
      text-align: center;
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

const Week = ({ current, setCurrent }) => {
  const weeks = ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"];

  const length = weeks.length;

  const nextWeek = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevWeek = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  if (!Array.isArray(weeks) || weeks.length <= 0) {
    return null;
  }

  return (
    <>
      <StyledBar className="progress-container">
        <p>Your 12 week progress</p>
        <div className="progress-dots" aria-hidden="true">
          <div className="progress-dot progress-dot--first">
            <span className="progress-dot__number">1</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">2</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">3</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">4</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">5</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">6</span>
          </div>
          <div className="progress-dot">
            <span className="progress-dot__number">7</span>
          </div>
          <div className="progress-dot progress-dot--last">
            <span className="progress-dot__number">8</span>
          </div>
        </div>
        <div className="progress-dots-bar" aria-hidden="true"></div>
      </StyledBar>
      <StyledWeek>
        <button className="left-arrow" onClick={prevWeek}>
          <img src={ArrowLeft} alt="" />
        </button>
        <div className="box">
          {weeks.map((week, index) => (
            <div
              className={index === current ? "week active" : "week"}
              key={index}
            >
              {index === current && <div className="box__week">{week}</div>}
            </div>
          ))}
        </div>
        <button className="right-arrow" onClick={nextWeek}>
          <img src={ArrowRight} alt="" />
        </button>
      </StyledWeek>
    </>
  );
};

export default Week;
//  onClick = { prevWeek };
//  onClick = { nextWeek };
