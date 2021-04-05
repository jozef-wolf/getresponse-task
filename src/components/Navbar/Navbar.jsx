import React from "react";
import styled from "styled-components";
import Burger from "./Hamburger";

const Header = styled.header`
  background-color: white;
  border-bottom: 2px solid #c9c9c9;
  position: fixed;
  height: 79px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 20;
`;

const Nav = styled.nav`
  width: 860px;
  height: 100%;
  margin-left: 118px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  z-index: 30;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }
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
