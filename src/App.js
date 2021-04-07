import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import ContainerTable from "./components/TableContainer";
import Aside from "./components/aside/Aside";
const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
