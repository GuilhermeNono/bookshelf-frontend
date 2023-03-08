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
      
      <a href="/"><LogoImg src="public/assets/images/svg/logo.svg" alt="Bookshelf" /></a>
      <Space></Space>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/"><GStart >Get Started</GStart></NavLink>
    </Nav>
  );
};

export default Header;
