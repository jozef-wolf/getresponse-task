import "./App.css";
import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import TableContainer from "./components/TableContainer";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <TableContainer />
    </StyledApp>
  );
}

export default App;
