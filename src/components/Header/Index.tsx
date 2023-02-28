import React from "react";
import { Link } from "react-router-dom";
import HeaderPolygon from "../HeaderPolygon/Index";
import { Nav, A, Logo, GetStarted, NavContent } from "./styles";

function Header() {
  return (
    <Nav>
      <NavContent>
        <GetStarted>Get Started</GetStarted>
        <A className="Active">Contact</A>
        <A>Pricing</A>
        <Logo href="/">
            <img
              src="public/assets/images/svg/logo.svg"
              width="200"
              height="37"
            />
          </Logo>
      </NavContent>
    </Nav>
  );
}

export default Header;
