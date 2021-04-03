import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

import { AiOutlineUser } from "react-icons/ai";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  border-left: 1px solid #c9c9c9;
  margin-left: 32px;
  li {
    padding: 20px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 61px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
    }
  }
`;

const UserUl = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>Dashboard</li>
        <li>Recipes</li>
        <li>Challange</li>
      </Ul>
      <UserUl>
        <li>
          <AiOutlineUser />
        </li>
        <li>
          Olivia Wild
          <BiChevronDown />
        </li>
      </UserUl>
    </>
  );
};

export default RightNav;
