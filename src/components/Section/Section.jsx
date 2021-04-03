import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Week from "./Week";
import Selections from "./Selections";


const StyledSection = styled.div``;

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
