import React from "react";
import styled from "styled-components";
import Arrow from "../imgs/arrow.svg";
import Apple from "../imgs/apple2x.png";
import Android from "../imgs/android2x.png";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  /* flex-wrap: wrap; */
  max-width: 978px;
  height: 190px;
  .box__first {
    border-right: 1px solid #828282;
    h2 {
      width: 183px;
      height: 55px;
    }
    span {
      width: 106px;
      height: 33px;
    }
  }
  .box__second {
    border-right: 1px solid #828282;
    > p {
      width: 237px;
      height: 35px;
      margin: 20px 23px 20px 48px;
    }

    span:first-child {
      width: 95px;
      height: 33px;
      img:first-child {
        width: 16px;
        height: 19px;
      }
    }
    span:last-child {
      width: 125px;
      height: 33px;
      img:first-child {
        width: 18px;
        height: 22px;
      }
    }
  }
  .box__third {
    h2 {
      width: 218px;
      height: 51px;
    }
    p {
      margin: 20px 2px 20px 38px;
    }
    span {
      width: 126px;
      height: 33px;
    }
  }
  .box__first,
  .box__second,
  .box__third {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 190px;
    width: 366px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    h2 {
      font-size: 28.5px;
      letter-spacing: -0.86px;
      text-align: left;
      color: #828282;
    }
    p {
      font-family: Arial;
      font-size: 15.5px;
      /* line-height: 1.42;
      letter-spacing: -0.47px; */
      text-align: left;
      color: #828282;
      /* width: 237px;
      height: 35px; */
    }
    span {
      height: 33px;
      border-radius: 5px;
      border: solid 1px #b8b8b8;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .arrow {
        width: 7px;
        height: 13px;
      }
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
          <p>FAQs</p>
          <img className="arrow" src={Arrow} alt="" />
        </span>
      </div>
    </StyledAside>
  );
};

export default Aside;
