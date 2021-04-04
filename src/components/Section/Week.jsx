import React from "react";
import styled from "styled-components";
import ArrowRight from "../imgs/arrow.svg";
import ArrowLeft from "../imgs/arrowL.svg";

const StyledDiv = styled.div`
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
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default Week;
//  onClick = { prevWeek };
//  onClick = { nextWeek };
