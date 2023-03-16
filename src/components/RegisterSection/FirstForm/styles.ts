import styled from "styled-components";

export const PButton = styled.p`
  padding-right: 15px;
  display: flex;
  justify-content: center;
`;


export const NameDiv = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export const Subtitle = styled.label`
  font-weight: 550;
  font-family: "poppins";
`;



export const Box = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  padding: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;

  margin-left: 20px;
  margin-right: 0px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const Titulo = styled.h1`
  font-weight: 500;
  font-size: 57.07px;
  line-height: 86px;
  line-height: 100%;
  color: #ffffff;
`;

export const OneRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
export const H2 = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #1a2e40;
`;

export const Input = styled.input`
  width: 100%;
  padding-bottom: 7px;
  padding-left: 10px;
  display: inline-block;
  border: 0;
  border: 1px solid;
  border-radius: 5px;
  align-items: center;
  background-color: transparent;
  outline: none;

  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  color: #8796a3;
`;

export const LabelFloat = styled.div`
  padding: 12px;
  box-sizing: border-box;
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #335675;
`;

export const TituloContainer = styled.h2`
  display: grid;
  align-items: center;
  font-size: 33.98px;
  line-height: 100%;
  opacity: 70%;
  font-weight: 500;
  color: #1a2e40;
`;

export const Botao = styled.input`
  width: 60%;
  height: 40.71px;
  border-radius: 4px;
  background-color: #1b8ef2;
  color: #ffffff;
  border: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 18.79px;
  line-height: 28.18px;
  line-height: 100%;
  transition: 400ms;
  &:hover {
    scale: 1.05;
  }
`;

export const Spacing = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  padding-top: 30px;
`;

export const Link = styled.a`
  color: #0075ff;

  &:hover,
  &:focus {
    color: #61a9eb;
  }
`;
