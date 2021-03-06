import React from "react";
import styled from "styled-components";
import WeekSelection from "./Week";
import FoodSelection from "./Selections";

const StyledSection = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 116px;
  padding-bottom: 33px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 0;
    padding: 90px 0 10px 0;
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
