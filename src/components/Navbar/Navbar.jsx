import React from "react";
import styled from "styled-components";
import Burger from "./Hamburger";

const Header = styled.header`
  width: 100vw;
  background-color: white;
  border-bottom: 2px solid #c9c9c9;
  position: fixed;
  height: 79px;
`;

const Nav = styled.nav`
  max-width: 978px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 30;
`;

const HeaderNav = () => {
  return (
    <Header>
      <Nav>
        <Burger />
      </Nav>
    </Header>
  );
};

export default HeaderNav;
