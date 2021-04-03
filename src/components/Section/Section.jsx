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

const Section = () => {
  return (
    <StyledSection>
      <ProgressBar />
      <Week />
      <Selections />
    </StyledSection>
  );
};

export default Section;
