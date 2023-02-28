import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5.42px;
`;

export const ImgContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;
  color: #1a2e40;
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
  transition: 0.5s;
  animation: ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

export const A = styled.a`
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
`;

export const CardBody = styled.div``;

export const Img = styled.img`
  position: absolute;
  bottom: 300px;
  z-index: 9999;
`;
