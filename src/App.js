import Section from "./components/Section/Section";
import Table from "./components/Table/Table";
import Aside from "./components/aside/Aside";
import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StyledContainer = styled.div`
  width: 987px;
`;

function App() {
  const [meals, setMeals] = useState(null);

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
    <StyledApp className="App">
      <Navbar />
      <StyledContainer>
        <Section />
        {/* Conditional templating in react */}
        {meals && <Table meals={meals} />}
        <Aside />
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
