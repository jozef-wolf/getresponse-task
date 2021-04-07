import React from "react";
import styled from "styled-components";
import ArrowRight from "../imgs/arrowR.png";
import ArrowLeft from "../imgs/arrowL.png";
const StyledDiv = styled.div`
  font-size: 9.5px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
    display: none;
  }

  p {
    text-align: center;
    text-transform: uppercase;
  }

  .progress {
    display: flex;
    justify-content: space-evenly;
    .progress__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;
      .progress-dot {
        position: relative;
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #dbdbdb;
        border-radius: 50%;
        z-index: 10 !important;
      }

      .progress-dot.active,
      .progress-link.active {
        background-color: #adbb0c;
      }
    }
  }
`;

const StyledWeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    display: none;
  }

  button {
    width: 24px;
    height: 42px;
    cursor: pointer;
    background-color: transparent;
    border: solid 1px #c0c0c0;
    border-radius: 5px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      left: 5px;
      background-color: #ff801a;
      transition: ease-in 0.5s;
    }
    img {
      width: 12px;
      height: 16px;
    }
  }

  .box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 249px;
    &__week {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 36px;
      font-size: 47px;
      color: #ff801a;
      line-height: 1;
    }
    .week {
      opacity: 0;
      transition-duration: 1s ease;
    }
    .week.active {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const WeekSelection = ({ current, setCurrent }) => {
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
      <StyledDiv>
        <p>Your 4 week progress</p>
        <div className="progress">
          {weeks.map((week, index) => (
            <div key={index} className="progress__box">
              <span
                className={
                  index === current ? "progress-dot active" : "progress-dot "
                }
              ></span>
              <span>{week.slice(4)}</span>
            </div>
          ))}
        </div>
      </StyledDiv>
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

export default WeekSelection;
