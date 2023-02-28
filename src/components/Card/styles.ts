import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;
  background-color: #FFFF;
  &:hover {
    transform: scale(1.005);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
  color: #1a2e40;
  font-family: "Rubik", sans-serif;
  
`;

export const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
`;


export const P = styled.p`
  margin: 0;
  padding: 0;
`;

export const H3 = styled.p`
  margin: 0;
  padding: 0;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem;
  background-color: #1b8ef2;
  border: none;
  transition: 0.2s;

  width: 100%;
  position: relative;
`;

export const A = styled.a`
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
`;

export const CardBody = styled.div``;

export const Img = styled.img``;