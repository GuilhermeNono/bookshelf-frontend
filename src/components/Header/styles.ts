import styled from "styled-components";

export const Nav = styled.div`
  /* height: 50px;
  margin-top: 0px;
  position: relative;
  background-color: #335675;
  display: block;
  justify-items: center;
  align-items: center;*/
  background-color: #335675;
  height: 50px;
`;

export const MainDiv = styled.div`
  display: inline-block;
`;

export const NavContent = styled.div`
  flex-direction: row;
  justify-content: center;
  display: flex;
`;

export const A = styled.button`
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border: none;
  background: none;

  &.Active {
    color: #5cb9f2;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.a`
  margin-left: 60px;
  margin-top: 15px;
  
  
`;

export const Space = styled.span`
  flex-grow: 1;
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GetStarted = styled.button`
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 5px;
  margin: 5px;
  margin-right: 50px;
  text-decoration: none;
  font-size: 17px;
  background: none;
  border-radius: 10px;
  border-color: #5cb9f2;
  &:hover {
    transform: scale(1.1);
  }
`;
