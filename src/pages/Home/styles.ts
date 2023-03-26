import styled from "styled-components";

export const CenterText = styled.div`
  text-align: center;

  h5 {
    color: var(--text-subtitle);
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
  text-decoration: none;
  padding: 16px 30px;
  font-size: var(--p-font);
  font-weight: 500;
  cursor: pointer;
  background: var(--main-color);
  color: var(--text-color);
  border-radius: 30px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(0.9) translateY(-5px);
  }
`;