import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import ContainerTable from "./components/TableContainer";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <ContainerTable />
    </StyledApp>
  );
}

export default App;
