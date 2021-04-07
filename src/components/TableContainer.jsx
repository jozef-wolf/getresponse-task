import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./Section/Section";
// import Table from "./Table/Table";
import TableFlex from "./Table/TableFlex";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 987px;
  height: 100%;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ContainerTable = () => {
  const [meals, setMeals] = useState(null);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    // fetch("http://localhost:3000/meals")
    fetch("https://github.com/jozef-wolf/db.json/blob/[main|master]/db.json")
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
      {/* {meals && <Table meals={meals} />} */}
      {meals && (
        <TableFlex meals={meals} current={current} setCurrent={setCurrent} />
      )}
    </StyledContainer>
  );
};

export default ContainerTable;
