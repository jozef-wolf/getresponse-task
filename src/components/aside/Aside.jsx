import React from "react";
import styled from "styled-components";
import Arrow from "../imgs/arrow.svg";
import Apple from "../imgs/apple2x.png";
import Android from "../imgs/android2x.png";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 45px;
  @media (max-width: 768px) {
    justify-content: center;
  }
  .box__first,
  .box__second,
  .box__third {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 190px;
    text-align: left;
    @media (max-width: 768px) {
      padding: 0px !important;
      margin: 30px;
      height: 200px;
      text-align: center;
      width: 300px !important;
      border-top: 2px solid #adbb0c;
    }
  }
  h2 {
    font-size: 28.5px;
    height: 55px;
    line-height: 1;
    letter-spacing: -0.86px;
    text-align: left;
    color: #828282;
  }
  > p {
    font-family: Arial;
    font-size: 12.5px;
    width: 237px;
    height: 35px;
    line-height: 1.42;
    letter-spacing: -0.47px;
    text-align: left;
    color: #828282;
  }
  span:hover {
    cursor: pointer;
  }
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #b8b8b8;
    img:first-child {
      width: 16px;
      height: 19px;
    }
  }
  .arrow {
    width: 7px;
    height: 13px;
  }
  .box__first {
    width: 307px;
    > span {
      width: 106px;
      height: 33px;
    }
  }

  .box__second {
    height: 190px;
    text-align: left;
    width: 316px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding-left: 48px;
    @media (max-width: 768px) {
      border-left: none;
      border-right: none;
      height: 240px;
    }
    > p {
      width: 237px;
      height: 35px;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    span:first-child {
      width: 95px;
      height: 33px;
    }
    span:last-child {
      width: 125px;
      height: 33px;
    }
  }
  .box__third {
    width: 275px;
    padding-left: 39px;
    span {
      width: 126px;
      height: 33px;
    }
  }
`;

const Aside = () => {
  return (
    <StyledAside>
      <div className="box__first">
        <h2>Running out of products?</h2>
        <p>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <span>
          <p>Buy now</p>
          <img className="arrow" src={Arrow} alt="" />
        </span>
      </div>
      <div className="box__second">
        <h2>Bod•e Trainer in your pocket</h2>
        <p>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <div>
          <span>
            <img src={Apple} alt="" />
            <p>iOS</p>
            <img className="arrow" src={Arrow} alt="" />
          </span>
          <span>
            <img src={Android} alt="" />
            <p>Android</p>
            <img className="arrow" src={Arrow} alt="" />
          </span>
        </div>
      </div>
      <div className="box__third">
        <h2>Frequently Asked Questions</h2>
        <p>
          Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
          aliquet.
        </p>
        <span>
          <p>Read FAQs</p>
          <img className="arrow" src={Arrow} alt="" />
        </span>
      </div>
    </StyledAside>
  );
};

export default Aside;
