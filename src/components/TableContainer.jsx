import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section/Section";
import Table from "./Table/Table";
import Aside from "./aside/Aside";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 987px;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ContainerTable = () => {
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
      <Section current={current} setCurrent={setCurrent} />
      {/* Conditional templating in react */}
      {meals && <Table meals={meals} />}
      <Aside />
    </StyledContainer>
  );
};

export default ContainerTable;