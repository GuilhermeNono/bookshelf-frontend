import React, { useRef } from 'react'
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
  NavLink
 } from './styles'

const Header = () => {
  const header = useRef<any>()
  const menuIcon = useRef<any>()
  const navbar =  useRef<any>()

  


  window.addEventListener("scroll", function() {
    if(header.current){
      header.current.classList.toggle("sticky", window.scrollY > 0);
    }
  })

  window.onscroll = () => {
    menuIcon.current.classList.remove('bx-x');
    navbar.current.classList.remove('open');
  };

  const openWindow = () => {
    menuIcon.current.classList.toggle("bx-x");
    navbar.current.classList.toggle("open");
  };

  return (
    <HeaderCont ref={header}>
        <LinkLogo href="/" className="logo">
          <Logo src="assets/images/svg/fullLogo.svg" />
        </LinkLogo>

        <NavBar ref={navbar}>
          <NavBarLinks>
            <a href="/#home">Home</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="/#categories">Serviços</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="/#about">Sobre Nós</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="/#contact">Contato</a>
          </NavBarLinks>
        </NavBar>

        <HeaderIcons>
          <HeaderLink href="/login">
            <HeaderIcon className="bx bx-user"></HeaderIcon>
          </HeaderLink>
          <HeaderLink href="/price">
            <HeaderIcon className="bx bx-cart"></HeaderIcon>
          </HeaderLink>
          <MenuIcon onClick={openWindow} ref={menuIcon} className="bx bx-menu"></MenuIcon>
        </HeaderIcons>
      </HeaderCont>
  )
}

export default Header