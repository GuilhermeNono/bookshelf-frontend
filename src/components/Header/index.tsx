import React from "react";
import { Link } from "react-router-dom";
import HeaderPolygon from "../HeaderPolygon/Index";
import {
  Nav,
  A,
  Logo,
  GetStarted,
  NavContent,
  Space,
  ContainerLinks,
} from "./styles";

function Header() {
  return (
    <Nav>
      <NavContent>
        <Logo href="/">
          <img
            src="/assets/images/svg/logo.svg"
            width="200"
            height="37"
          />
        </Logo>
        <Space></Space>

        <ContainerLinks>
          <A>Pricing</A>
          <A className="Active">Contact</A>

          <GetStarted>Get Started</GetStarted>
        </ContainerLinks>
      </NavContent>
    </Nav>
  );
}

export default Header;
