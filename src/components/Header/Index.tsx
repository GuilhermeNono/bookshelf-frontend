import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Svg,
  GStart,
  Space,
  Logo,
  LogoImg,
} from "./styles";

const Header = () => {
  return (
    <Nav>
      <Bars />
      <a href="/"><LogoImg src="public/assets/images/svg/logo.svg" alt="Bookshelf" /></a>
      <NavMenu>
      <Space></Space>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <GStart>Get Started</GStart>

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
    </Nav>
  );
};

export default Header;
