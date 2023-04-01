// import { useMaterialUIController } from "context";
import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
// const [controller, dispatch] = useMaterialUIController();

// const { darkMode } = controller;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 511px;
  height: 100%;
  background-color: ${(props) => (props.darkMode ? "#344767" : "white")};

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  /* background: url("assets/images/png/bg-inner.png") repeat; */
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

export default {
  Inner,
};
