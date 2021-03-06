import React from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineUser } from "react-icons/ai";
import Profile from "../imgs/profile.jpg";
const user = [
  {
    name: "Josef Wolf",
  },
];

const NavUl = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  border-left: 1px solid #c9c9c9;
  margin-left: 32px;
  font-size: 12.5px;
  color: #7c7c7c;
  li {
    padding: 20px 10px;
    position: relative;
    :hover {
      color: #ff801a;
      cursor: pointer;
    }
  }
  li::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    left: 35%;
    margin-top: 20px;
    background: #ff801a;
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }
  li:hover::after {
    transform: scale(1, 1);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 79px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
    }
  }
`;

const UserUl = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-around;
  color: #7c7c7c;
  flex-direction: row;
  align-items: center;
  list-style: none;
  font-size: 15.5px;
  @media (max-width: 768px) {
    color: black;
  }
  li {
    cursor: pointer;
  }
  li:first-child {
    border: 1px solid #c0c0c0;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 34px;
      height: 34px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  li:nth-child(2) {
    margin: 10px;
    font-size: 15.5px;
    line-height: 3.03;
    text-align: left;
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <NavUl open={open}>
        <li>Dashboard</li>
        <li>Recipes</li>
        <li>Challange</li>
      </NavUl>
      <UserUl>
        <li>
          <img src={Profile} alt="" />
        </li>
        <li>{user[0].name}</li>
        <li>
          <BiChevronDown />
        </li>
      </UserUl>
    </>
  );
};

export default RightNav;
