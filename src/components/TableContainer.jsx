import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section/Section";
import Table from "./Table/Table";
import Aside from "./aside/Aside";

const StyledContainer = styled.div`
  width: 987px;
`;

const TableContainer = () => {
  const [meals, setMeals] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  }, []);

  return (
    <StyledContainer>
      <Aside />
    </StyledContainer>
  );
};

export default TableContainer;
