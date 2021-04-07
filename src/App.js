import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import ContainerTable from "./components/TableContainer";
import Aside from "./components/aside/Aside";
import GlobalStyle from "./GlobalStyles";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Navbar />
      <ContainerTable />
      <Aside />
    </StyledApp>
  );
}

export default App;
