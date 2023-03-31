import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Poppins", sans-serif;

  overflow-x: hidden;
  font-size: 13px;
  margin: 0;
  color: #999;

  input,
  textarea,
  select {
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: flex-end;
  background: url("assets/images/svg/RegisterBack.svg")
    no-repeat right center;
  background-size: cover;
  min-height: 100%;
  height: 100vh;

  @media (max-width: 1199px) {
    background-position: center center;
  }

  @media (max-width: 767px) {
    .wrapper {
      background: none;
      display: block;
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
  background: url("assets/images/png/bg-inner.png") repeat;
  padding: 0px;

  @media (max-width: 991px) {
    width: 60%;
  }

  @media (max-width: 767px) {
    width: 100%;
    transform: translateY(0);
    position: static;
    padding: 0;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
  }
`;
