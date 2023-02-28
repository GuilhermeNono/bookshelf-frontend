import styled from "styled-components";

export const Nav = styled.div`
 /* height: 50px;
  margin-top: 0px;
  position: relative;
  background-color: #335675;
  display: block;
  justify-items: center;
  align-items: center;*/

  height: 50px;
  display: flex;
  flex-direction: row;

`;

export const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
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
`;

export const Logo = styled.svg`
  float: left;
  margin-left: 50px;
  height: 40px;
  order: -2;
`;

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
  //margin-top: 8px;

  border-radius: 10px;
  border-color: #5cb9f2;

  order: 2;
`;
