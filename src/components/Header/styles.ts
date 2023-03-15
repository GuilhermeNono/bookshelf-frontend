import styled from 'styled-components';

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
    background: var(--bg-color);
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
  width: 200px;
  max-width: 100%;
`;

export const NavBar = styled.ul`
  display: flex;
  & a {
    color: var(--text-color);
    font-weight: 400;
    font-size: var(--p-font);
    padding: 10px 22px;
    transition: all 0.4s ease;
  }
  & a:hover {
    color: var(--main-color);
  }

  @media (max-width: 1025px) {
    position: absolute;
    top: 100%;
    right: -100%;
    width: 300px;
    height: 110vh;
    background: var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 170px 30px;
    transition: all 0.4s ease;

    a {
      display: block;
      margin: 1.3rem 0;
      color: var(--bg-color);
    }
    a:hover {
      color: var(--bg-color);
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
  color: var(--text-color);
  transition: all 0.4s ease;
  margin-right: 15px;

  &:hover {
    transform: scale(1.2);
    color: var(--main-color);
  }
`;

export const MenuIcon = styled.div`
  font-size: 34px;
  color: var(--text-color);
  z-index: 10001;
  cursor: pointer;
  display: none;

  @media (max-width: 1025px) {
    display: block;
  }
`;