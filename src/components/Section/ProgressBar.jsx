import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  .progress-dot {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c2c5cc;
    z-index: 10 !important;
  }

  .progress-link {
    background-color: #c2c5cc;
    display: inline-block;
    width: 39px;
    height: 6px;
    position: relative;
    top: -7px;
    margin-left: -7px;
    margin-right: -7px;
    z-index: 0;
  }

  .progress-dot.active,
  .progress-link.active {
    background-color: #354052;
  }
`;

const ProgressBar = () => {
  return (
    <div>
      <p>Your 12 week progress</p>
      <StyledDiv className="progress-container">
        <span className="progress-dot active"></span>
        <span>
          <span className="progress-link active"></span>
          <span className="progress-dot active"></span>
        </span>
        <span>
          <span className="progress-link"></span>
          <span className="progress-dot"></span>
        </span>
        <span>
          <span className="progress-link"></span>
          <span className="progress-dot"></span>
        </span>
      </StyledDiv>
    </div>
  );
};

export default ProgressBar;
