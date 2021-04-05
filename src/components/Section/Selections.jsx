import React, { useState } from "react";
import styled from "styled-components";
import {
  GiSteak,
  GiCheeseWedge,
  GiFlatfish,
  GiChickenOven,
  GiBroccoli,
} from "react-icons/gi";

const StyledDiv = styled.div`
  width: 300px;
  p {
    font-size: 9.5px;
  }
  div {
    font-size: 30px;
    color: #828282;
    color: ${({ open }) => (open ? "lightgrey" : "green")};
  }
`;

const Selections = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledDiv open={open} onClick={() => setOpen(!open)}>
      <p>Select your options</p>
      <div>
        <GiBroccoli />
        <GiCheeseWedge />
        <GiSteak />
        <GiFlatfish />
        <GiChickenOven />
      </div>
    </StyledDiv>
  );
};

export default Selections;
