import React from "react";
import styled from "styled-components";
import WeekSelection from "./Week";
import FoodSelection from "./Selections";

const StyledSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 116px;
  padding-bottom: 33px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = ({ current, setCurrent }) => {
  return (
    <StyledSection>
      <WeekSelection current={current} setCurrent={setCurrent} />
      <FoodSelection />
    </StyledSection>
  );
};

export default Section;
