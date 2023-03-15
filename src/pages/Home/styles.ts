import styled from "styled-components";

export const Header = styled.header`
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
  width: 160px;
  max-width: 100%;
`;

export const NavBar = styled.ul`
  display: flex;
  & a {
    color: var(--text-color);
    font-weight: 600;
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
`;

export const HomeSec = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(../img/background.png);
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;

  @media (max-width: 1050px) {
    height: 84vh;
    :root {
      --big-font: 3.2rem;
      --h2-font: 2rem;
      --p-font: 1rem;
      transition: 0.1s;
    }
  }
  @media (max-width: 890px) {
    height: 150vh;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    height: 120vh;
  }
`;

export const HomeText = styled.div`
  h1 {
    font-size: var(--big-font);
    margin: 15px 0 15px;
  }

  h6 {
    color: var(--main-color);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  p {
    color: var(--second-color);
    font-size: var(--p-font);
    font-weight: 500;
    margin-bottom: 48px;
  }
  @media (max-width: 890px) {
    padding-top: 20px;
  }
`;

export const Latter = styled.div``;

export const LatterForm = styled.form`
  width: 100%;
  max-width: 460px;
  position: relative;

  input:first-child {
    display: inline-block;
    width: 100%;
    outline: none;
    padding: 16px 140px 16px 15px;
    border: 2px solid var(--main-color);
    border-radius: 30px;
  }

  input:last-child {
    position: absolute;
    display: inline-block;
    border: none;
    outline: none;
    background: var(--main-color);
    color: var(--bg-color);
    padding: 16px 40px;
    border-radius: 30px;
    cursor: pointer;
    top: 2px;
    right: 1px;
  }
`;

export const HomeImage = styled.div`
  img {
    height: auto;
    width: 100%;
  }
  @media (max-width: 890px) {
    text-align: center;
  }
  img {
    height: auto;
    width: 100%;
  }
`;

export const ContainerSec = styled.section`
  padding: 70px 13%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1410px) {
    padding: 70px 3%;
    transition: 0.2s;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  padding: 20px 30px;
  box-shadow: -11.729px -11.729px 32px rgb(255 255 255 / 15%);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-15px);
  }
`;

export const ContainerImage = styled.div``;

export const ContainerText = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    font-size: var(--p-font);
    color: var(--second-color);
    font-weight: 500;
  }
`;

export const Categories = styled.section``;

export const CenterText = styled.div`
  text-align: center;

  h5 {
    color: var(--main-color);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: var(--h2-font);
    line-height: 1.2;
  }
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin-top: 4rem;
`;

export const Box = styled.div`
  padding: 25px 60px;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  box-shadow: -11.729px -11.729px 32px rgb(255 255 255 / 15%);
  transition: all 0.4s ease;

  img {
    height: auto;
    width: 110px;
    margin-bottom: 20px;
  }
  &:hover {
    transform: translateY(-15px);
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 1.3;
    transition: all 0.4s ease;
  }
  h3:hover {
    color: var(--main-color);
  }
  p {
    font-size: var(--p-font);
    color: var(--second-color);
    font-weight: 500;
  }
`;

export const MainBtn = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export const Btn = styled.a`
  display: inline-block;
  padding: 16px 30px;
  font-size: var(--p-font);
  font-weight: 700;
  background: var(--main-color);
  color: var(--bg-color);
  border-radius: 30px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(0.9) translateY(-5px);
  }
`;

export const CourseSec = styled.section`
  background: url(../img/coursebg.png);
  background-size: cover;
  background-position: center;
`;

export const CourseText = styled.div`
  padding: 35px 20px;
  h5 {
    color: var(--main-color);
    font-size: 18px;
    font-weight: 700;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    margin: 15px 0 15px;
    transition: all 0.4s ease;
  }
  h3:hover {
    color: var(--main-color);
  }
  h6 {
    color: #696969;
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }
`;

export const CourseContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;
  cursor: pointer;
  border-radius: 15px;
`;

export const Row = styled.div`
  background: var(--bg-color);
  padding: 0px 0px 10px 0px;
  border-radius: 20px;
  box-shadow: 0px 5px 40px rgb(19 8 73 / 13%);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-15px);
  }

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Star = styled.div`
  i {
    color: var(--main-color);
    margin-right: 2px;
    font-size: 17px;
  }
`;

export const Review = styled.div`
  p {
    color: #696969;
    font-size: var(--p-font);
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

export const CtaSec = styled.section``;

export const CtaContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, auto));
  gap: 2rem;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
`;

export const CtaImage = styled.div``;

export const AboutSec = styled.section`
  background: url(../img/aboutbg.png);
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  @media (max-width: 890px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const AboutText = styled.div`
  h2 {
    font-size: var(--h2-font);
    line-height: 1.2;
    margin-bottom: 20px;
  }
  p {
    font-size: var(--p-font);
    color: var(--second-color);
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const ContactSec = styled.section`
  padding: 60px 13%;
  background: var(--bg-color);

  @media (max-width: 1410px) {
    padding: 60px 3%;
    transition: 0.2s;
  }
`;

export const MainContact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2rem;
`;

export const ContactContent = styled.div`
  img {
    height: auto;
    width: 160px;
    max-width: 100%;
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 18px;
  }
  li a {
    display: block;
    color: var(--text-color);
    font-weight: 500;
    font-size: 15px;
    transition: all 0.4s ease;
  }
  li a:hover {
    transform: translateX(10px);
    color: var(--main-color);
  }
`;

export const LastText = styled.div`
  p {
    text-align: center;
    padding: 18px;
    color: var(--second-color);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
