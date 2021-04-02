import React from "react";
import styled from "styled-components";
import Burger from "./Hamburger";

const Nav = styled.nav`
  position: fixed;
  background-color: white;
  width: 100%;
  height: 79px;
  border-bottom: 2px solid #c9c9c9;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 30;
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
