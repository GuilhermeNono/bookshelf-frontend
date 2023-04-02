import styled from "styled-components";

import checkingPlans from "assets/images/CheckingPlans.svg";
import checking from "assets/images/Checking.svg";
import zero from "assets/images/zero.svg";
import um from "assets/images/um.svg";
import dois from "assets/images/dois.svg";

export const Container = styled.div`
  background-image: linear-gradient(180deg, #335675 47rem, #61a9eb 40%);
  background-size: cover;
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;

  background: #335675;
  color: #ffffff;
  padding: 30px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    background-image: linear-gradient(180deg, #335675 47rem, #61a9eb 10%);
  }

  @media only screen and (min-width: 600px) {
    background-image: linear-gradient(180deg, #335675 47rem, #61a9eb 20%);
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 1rem;

  @media only screen and (max-width: 1200px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const CardLite = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  width: 27rem;
  height: 40.4rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1296px) {
    padding-bottom: 0rem;
  }
`;

export const CardPro = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  z-index: 1;
  width: 27rem;
  height: 670px;
  transform: scale(1.12);

  @media only screen and (max-width: 1200px) {
    height: 40.4rem;
    transform: scale(1);
    z-index: 0;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 600px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1296px) {
    padding-bottom: 0rem;
  }
`;

export const CardEssentials = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  width: 27rem;
  height: 40.4rem;

  @media only screen and (max-width: 600px) {
    height: auto;
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 992px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 1296px) {
    padding-bottom: 0rem;
  }
`;

export const List = styled.ul`
  margin: 1rem 2rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const Linha = styled.li`
  padding: 0.6rem 0;
  list-style-image: ${checking};
  list-style-position: inside;

  font-weight: 400;
  font-size: 0.8em;

  color: #0d4373;

  @media only screen and (max-width: 600px) {
    font-size: 1.1em;
  }
`;

export const LiLite = styled.li`
  list-style-image: ${zero};
  list-style-position: inside;

  font-weight: 700;
  font-size: 1em;
  color: #1b8ef2;
`;

export const LiPro = styled.li`
  list-style-image: ${dois};
  list-style-position: inside;

  font-weight: 700;
  font-size: 1rem;
  color: #1b8ef2;
`;

export const LiEssentials = styled.li`
  list-style-image: ${um};
  list-style-position: inside;

  font-weight: 700;
  font-size: 0.95em;
  color: #1b8ef2;
`;

export const LiTipo = styled.li`
  font-weight: 400;
  font-size: 20px;
  color: #22a2f2;
  padding-left: 50px;
`;

export const LiPrice = styled.li`
  font-weight: 400;
  font-size: 2.8em;
  color: #1a2e40;
  padding: 0.3rem 0;

  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }
`;

export const LiTitle = styled.li`
  margin-top: 1.4rem;
  font-weight: 700;
  font-size: 0.95em;
  color: #1a2e40;

  @media only screen and (max-width: 600px) {
    font-size: 1.15em;
  }
`;

export const ButtonOne = styled.input`
  height: 2.75rem;
  border-radius: 4px;
  background-color: #1b8ef2;
  color: #ffffff;
  border: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 1.25em;
`;

export const ButtonTwo = styled.input`
  width: 100%;
  height: 3.5rem;
  border-radius: 0px 0px 0.3rem 0.3rem;
  background-color: #1b8ef2;
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25em;
  position: absolute;
  bottom: 0;
`;

export const TextPopular = styled.span`
  position: absolute;
  right: 0;
  text-align: center;
  background: #1b8ef2;
  border-radius: 10px;
  width: 6.6rem;
  margin: auto 5px;
  color: white;
`;

export const H1Chamativo = styled.h1`
  font-weight: 600;
  font-size: 3em;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  margin-top: 6rem;

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }

  @media only screen and (min-width: 600px) {
    font-size: 2.5em;
  }

  @media only screen and (min-width: 768px) {
    font-size: 3em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2.8em;
  }

  @media only screen and (min-width: 1296px) {
    font-size: 3em;
  }
`;

export const H4Chamativo = styled.h4`
  font-weight: 400;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #f1f1f1;
  margin-top: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }

  @media only screen and (min-width: 600px) {
    font-size: 1.1em;
  }

  @media only screen and (min-width: 768px) {
    font-size: 0.95em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.3em;
  }
`;

export const Marker = styled.svg`
  background-image: ${checkingPlans};
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  margin: 0.5rem;
`;

export const ThTop = styled.th`
  text-align: center;
  border-bottom: 0.1rem solid #e1e1e1;
  font-weight: 500;
  font-size: 1.5em;
  color: #ffffff;

  @media only screen and (max-width: 600px) {
    font-size: 0.95em;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.95em;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.35em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 1296px) {
    font-size: 0.8em;
  }
`;

export const Thv = styled.th`
  text-align: start;
  border-bottom: 0.1rem solid #e1e1e1;
  font-weight: 500;
  font-size: 1.5em;
  color: #ffffff;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.95em;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.35em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5em;
  }

  @media only screen and (min-width: 1296px) {
    font-size: 0.8em;
  }
`;

export const ThLeft = styled.th`
  text-align: start;
  border-bottom: 0.1rem solid #e1e1e1;
  font-weight: 400;
  font-size: 1em;
  color: #0d4373;
`;

export const Td = styled.td`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  border-bottom: 0.1rem solid #e1e1e1;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 3rem auto;
`;

export const TableResponsive = styled.div`
  overflow-x: auto;
`;
