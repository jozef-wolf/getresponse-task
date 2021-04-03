import React, { useState } from "react";
import styled from "styled-components";
import Arrow from "../imgs/arrow.svg";
import ArrowL from "../imgs/arrowL.svg";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  button {
    width: 24px;
    height: 42px;
    display: flex;
    align-items: center;
    img {
    }
  }
  div {
    text-align: center;
    width: 249px;
    font-size: 47px;
    color: #ff801a;
    line-height: 1;
  }
  .box {
    display: flex;
    flex-direction: row;
    &__week {
      flex-direction: row;
    }
  }
`;

const Week = () => {
  const weeks = ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"];
  const [current, setCurrent] = useState(0);
  const lenght = weeks.length


  
  return (
    <StyledDiv>
      <button>
        <img src={ArrowL} alt="" />
      </button>
      <div className="box">
        {weeks.map((week, index) => (
          <div className="box__week">{week}</div>
        ))}
      </div>
      <button>
        <img src={Arrow} alt="" />
      </button>
    </StyledDiv>
  );
};

export default Week;
