import React from "react";
import styled from "styled-components";
import Burger from "./Hamburger";

const Header = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 2px solid #c9c9c9;
  position: fixed;
  height: 79px;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  width: 978px;
  height: 100%;
  border-left: 1px solid #c9c9c9;
  margin-left: 118px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
