import { useEffect, useRef, useState } from "react";
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

  const [scrolling, setScrolling] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrolling(true);
      const currentPosition = window.scrollY; // or use document.documentElement.scrollTop;
      if (header.current) {
        header.current.classList.toggle("sticky", window.scrollY > 0);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      setScrolling(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolling]);

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
