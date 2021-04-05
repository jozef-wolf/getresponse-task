import React from "react";
import styled from "styled-components";

import Week from "./Week";
import Selections from "./Selections";

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 116px;
  flex-wrap: wrap;
`;

const Section = ({ current, setCurrent }) => {
  return (
    <StyledSection>
      <Week current={current} setCurrent={setCurrent} />
      <Selections />
    </StyledSection>
  );
};

export default Section;
