import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #335675;
  color: #ffffff;

  section {
    padding: 80px 13%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "poppins";
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }
`;

export const CenterText = styled.div`
  text-align: center;

  h5 {
    color: #cecece;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2.6rem;
    line-height: 1.2;
    font-weight: 500;
  }
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
    color: #1b8ef2;
  }
  p {
    font-size: 1.1rem;
    color: #c7dffc;
    font-weight: 500;
  }
`;

export const MainBtn = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export const Btn = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 16px 30px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  background: #1b8ef2;
  color: #ffffff;
  border-radius: 30px;
  transition: all 0.4s ease;
  margin-top: 1rem;

  &:hover {
    transform: scale(0.9) translateY(-5px);
  }
`;
/*
#1b8ef2 | Destaque
#335675 | Background-dark
#61a9eb | Background-light
#0d4373 | Secondary
#ffffff | Destaque
#1a2e40 | Text Color
#cecece | Subtitle
*/
export const AboutSec = styled.section`
  background: #61a9eb;
  background-size: cover;
  background-position: center;
`;

export const AboutText = styled.div`
  padding: 35px 20px;
  p {
    color: rgb(51, 86, 117);
    text-align: justify;
  }
  h2 {
    line-height: 1.2;
    font-weight: 500;
  }
  h5 {
    color: #335675;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    margin: 15px 0 15px;
    transition: all 0.4s ease;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, auto));
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;
  border-radius: 15px;
`;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin-top: 4rem;
`;

export const ContactSec = styled.section`
  background: #61a9eb;
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

  @media (max-width: 540px) {
    img {
      width: 75%;
    }
  }
`;

export const ContactText = styled.div`
  h2 {
    font-size: 2.6rem;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 500;
  }
  p {
    font-size: 0.8em;
    color: #1a2e40;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 1em;
    margin-bottom: 10px;
  }
  h6 {
    font-size: 0.8em;
    margin-bottom: 40px;
    color: #1a2e40;
    font-weight: 500;
  }
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  button {
    width: 50%;
  }
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContact = styled.div`
  display: flex;
  gap: 20px;
  h4 {
    text-align: center;
    margin: 0;
    font-weight: 500;
  }
`;

export const ContainerSec = styled.section`
  padding: 70px 13%;
  display: grid;
  background: #61a9eb;
  background-size: cover;
  background-position: center;
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
    font-size: 1.1rem;
    color: #1a2e40;
    font-weight: 500;
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

export const CtaImage = styled.div`
  img {
    height: auto;
    width: 100%;
    border-radius: 6px;
  }

  @media (min-width: 540px) {
    img {
      width: 75%;
    }
  }
`;

export const CtaText = styled.div`
  text-align: left;
  h3 {
    color: #ffffff;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 1.2em;
    margin-top: 1rem;
  }
  h2 {
    line-height: 1.2;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1em;
    font-weight: 500;
    margin-top: 1rem;
    padding-left: 10px;
  }
  strong {
    color: #cecece;
  }
  p {
    color: #c7dffc;
    text-align: justify;
  }
`;

export const HomeSec = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: #335675;
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
    font-size: 3.8rem;
    margin: 15px 0 15px;
  }

  h6 {
    color: #cecece;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  p {
    color: #cecece;
    font-size: 1.1rem;
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
    border: 2px solid #1b8ef2;
    border-radius: 30px;
  }

  input:last-child {
    position: absolute;
    display: inline-block;
    border: none;
    outline: none;
    background: #1b8ef2;
    color: #cecece;
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
export const Categories = styled.section``;
