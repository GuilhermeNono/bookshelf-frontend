import { useRef } from "react";
import {
  HeaderCont,
  HeaderIcon,
  HeaderIcons,
  HeaderLink,
  LinkLogo,
  Logo,
  MenuIcon,
  NavBar,
  NavBarLinks,
} from "assets/styledComponents/headerstyles";

import fullLogo from "assets/images/fullLogo.svg";

function Header() {
  const header = useRef();
  const menuIcon = useRef();
  const navbar = useRef();

  window.addEventListener("scroll", () => {
    if (header.current) {
      header.current.classList.toggle("sticky", window.scrollY > 0);
    }
  });

  window.onscroll = () => {
    menuIcon.current.classList.remove("bx-x");
    navbar.current.classList.remove("open");
  };

  const openWindow = () => {
    menuIcon.current.classList.toggle("bx-x");
    navbar.current.classList.toggle("open");
  };

  return (
    <HeaderCont ref={header}>
      <LinkLogo href="/" className="logo">
        <Logo src={fullLogo} alt="logo" />
      </LinkLogo>

      <NavBar ref={navbar}>
        <NavBarLinks>
          <a href="/#home">Home</a>
        </NavBarLinks>
        <NavBarLinks>
          <a href="/#categories">Serviços</a>
        </NavBarLinks>
        <NavBarLinks>
          <a href="/pricing">Preços</a>
        </NavBarLinks>
        <NavBarLinks>
          <a href="/#about">Sobre Nós</a>
        </NavBarLinks>
        <NavBarLinks>
          <a href="/#contact">Contato</a>
        </NavBarLinks>
      </NavBar>

      <HeaderIcons>
        <HeaderLink href="/authentication/sign-in">
          <HeaderIcon className="bx bx-user" />
        </HeaderLink>
        <HeaderLink href="/price">
          <HeaderIcon className="bx bx-cart" />
        </HeaderLink>
        <MenuIcon onClick={openWindow} ref={menuIcon} className="bx bx-menu" />
      </HeaderIcons>
    </HeaderCont>
  );
}

export default Header;
