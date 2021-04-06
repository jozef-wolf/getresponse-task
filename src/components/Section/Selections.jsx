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
  p {
    font-size: 9.5px;
    text-align: center;
    text-transform: uppercase;
  }
  div {
    font-size: 30px;
    color: #828282;
    color: ${({ open }) => (open ? "lightgrey" : "#adbb0c;")};
    * {
      margin-left: 13px;
    }
  }
`;

const FoodSelection = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledDiv open={open} onClick={() => setOpen(!open)}>
      <p>Select your protein options</p>
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

export default FoodSelection;
