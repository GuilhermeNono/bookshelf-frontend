import { Button } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  scroll-behavior: smooth;

  overflow-x: hidden;
  font-family: "Poppins-Regular";
  font-size: 13px;
  margin: 0;
  color: #999;

  input,
  textarea,
  select {
    font-family: "Muli-Regular";
    font-size: 13px;
    color: #666;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  ul {
    padding-left: 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  div {
    .form-row {
      display: flex;
      margin-bottom: 25px;
    }

    .form-row.last {
      margin-bottom: 22px;
    }

    .form-row .form-wrapper {
      width: 50%;
    }

    .form-row .form-wrapper:first-child {
      margin-right: 25px;
    }

    .form-wrapper {
      position: relative;
    }

    .form-wrapper label {
      display: block;
      font-family: "Muli-SemiBold";
      font-size: 17px;
      color: #4c4c4c;
      margin-bottom: 8px;
    }

    .form-wrapper i.zmdi-chevron-down {
      position: absolute;
      right: 16px;
      top: 42px;
      font-size: 15px;
      color: #666;
    }

    .form-wrapper span.lnr-calendar-full {
      position: absolute;
      left: 16px;
      font-size: 15px;
      color: #666;
      top: 43px;
    }

    .form-control {
      border: 1px solid #e6e6e6;
      display: block;
      width: 100%;
      height: 42px;
      padding: 0 14px;
    }

    .form-control.datepicker-here {
      padding-left: 39px;
    }
  }
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 511px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  background: url("../assets/bg-inner.png") repeat;
  padding: 0px;
`;

export const RegForm = styled.form`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 12px 46px 12px;
  background: #fff;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 35px;
  font-family: "Poppins-Medium";
  color: #3e91f7;
  letter-spacing: 3px;
  margin-bottom: 22px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: flex-end;
  background: url("src/components/RegisterForm/assets/RegisterBack.svg")
    no-repeat right center;
  background-size: cover;
  min-height: 100%;
  height: 100vh;
`;

export const Submit = styled.button`
  border: none;
  width: 100%;
  height: 30px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #3e91f7;
  color: #fff;
  text-transform: uppercase;
  font-family: "Muli-SemiBold";
  font-size: 15px;
  position: relative;
  transition: all 0.3s ease;

  span {
    letter-spacing: 3px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 0;
    opacity: 0;
    letter-spacing: 3px;
    -webkit-transform: translate(-30%, -25%);
    transform: translate(-30%, -25%);
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  &:hover {
    background: #0072fd;
  }

  &:hover span {
    opacity: 0;
    -webkit-transform: translate(0px, 40px);
    transform: translate(0px, 40px);
  }

  &:hover:after {
    opacity: 1;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
  }
`;

export const Check = styled.div`
  label {
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 12px;
    width: 13px;
    border-radius: 2px;
    background-color: #ebebeb;
    border: none;
    font-family: Material-Design-Iconic-Font;
    font-size: 10px;
    font-weight: bolder;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      content: "	\2713";
      color: rgba(0, 68, 255, 0.637);
    }
  }
`;

// export const MQuery = styled.div`
//   @media (max-width: 1199px) {
//   Wrapper {
//     background-position: center center;
//   }
// }

// @media (max-width: 991px) {
//   Inner {
//     width: 60%;
//   }
// }

// @media (max-width: 767px) {
//   Inner {
//     width: 100%;
//     transform: translateY(0);
//     position: static;
//     padding: 0;
//     box-shadow: none;
//     -webkit-box-shadow: none;
//     -moz-box-shadow: none;
//     -ms-box-shadow: none;
//     -o-box-shadow: none;
//   }

//   Wrapper {
//     background: none;
//     display: block;
//   }

//   RegForm {
//     padding: 30px 20px;
//   }

//   .form-row {
//     display: block;
//   }

//   .form-row .form-wrapper {
//     width: 100%;
//     margin-bottom: 25px;
//   }

//   .form-row .form-wrapper:first-child {
//     margin-right: 0;
//   }
// }
// `
