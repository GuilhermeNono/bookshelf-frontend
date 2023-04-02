import styled from "styled-components";

export const HeaderCont = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 23px 13%;
  transition: all 0.4s ease;

  &.sticky {
    background: #335675;
    padding: 12px 13%;
    box-shadow: 0px 4px 15px rgb(0 0 0 / 8%);
  }

  @media (max-width: 1410px) {
    padding: 10px 3%;
    transition: 0.2s;

    &.sticky {
      padding: 12px 3%;
      transition: 0.2s;
    }

    section {
      padding: 70px 3%;
      transition: 0.2s;
    }
  }
`;

export const LinkLogo = styled.a``;

export const Logo = styled.img`
  height: auto;
  width: 150px;
  max-width: 100%;
`;

export const NavBar = styled.ul`
  display: flex;
  margin: 0;
  & a {
    color: #ffffff;
    text-align: center;
    font-weight: 400;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0 22px;
    transition: all 0.4s ease;
  }

  & li {
    list-style-type: none;
  }

  & a:hover {
    color: #1b8ef2;
  }

  @media (max-width: 1025px) {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 300px;
    height: 110vh;
    background: #1b8ef2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 170px 30px;
    transition: all 0.4s ease;

    a {
      display: block;
      margin: 1.3rem 0;
      color: #335675;
    }
    a:hover {
      color: #335675;
      transform: translateY(-5px);
    }
    &.open {
      right: 0;
    }
  }
`;

export const NavBarLinks = styled.li``;

export const NavLink = styled.a``;

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.a``;

export const HeaderIcon = styled.i`
  margin-left: 10px;
  font-size: 24px;
  color: #ffffff;
  transition: all 0.4s ease;
  margin-right: 15px;

  &:hover {
    transform: scale(1.2);
    color: #1b8ef2;
  }
`;

export const MenuIcon = styled.div`
  font-size: 34px;
  color: #ffffff;
  z-index: 10001;
  cursor: pointer;
  display: none;

  @media (max-width: 1025px) {
    display: block;
  }
`;
