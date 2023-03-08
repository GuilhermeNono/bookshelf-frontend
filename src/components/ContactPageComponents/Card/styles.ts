import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 150px;

  height: 300px;
  transition: 0.5s;
`;
export const Lines = styled.div`
  position: absolute;
  border-radius: 10px;

  inset: 0;

  overflow: hidden;
  content: "";
  position: absolute;
  background: #fff;

  inset: 3px;
`;
export const ImgBox = styled.div`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: transparent;
  z-index: 10;

  overflow: hidden;

  img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    z-index: 20;
  }
`;

export const ContentInformation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  opacity: 1;
  transition: 0.5s;
  overflow: hidden;
`;
export const DetailsInformation = styled.div`
  padding-top: 10px;
  width: 100%;
  transition: 0.5s;
  transform: translateY(-10%);
`;
export const TextDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: black;
    font-size: 32px;
    font-weight: 600;
  }

  span {
    font-weight: 300;
    color: balck;
  }
`;
export const DataDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;
export const TextDataDetails = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;

  h3 {
    color: #335675;
    font-size: 24px;
    font-weight: 600;
  }

  span {
    font-weight: 300;
    color: #fff;
  }
`;
export const Button = styled.button`
  width: 99%;
  height: 50px;
  border-style: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color:#1B8EF2;
  color: #FFF;
  transition: 200ms;

  &:hover{
    font-size: 20px;
    background-color:#0a8afa ;
  }
`;
