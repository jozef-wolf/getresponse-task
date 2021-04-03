import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Week from "./Week";
import Selections from "./Selections";

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 116px;
`;

const Section = ({ meals, current, setCurrent }) => {
  return (
    <StyledSection>
      <ProgressBar />
      <Week current={current} setCurrent={setCurrent} />
      <Selections />
    </StyledSection>
  );
};

export default Section;
