import styled from "styled-components";

export const AboutSec = styled.section`
  background: var(--bg-second-color);
  background-size: cover;
  background-position: center;
`;

export const AboutText = styled.div`
  padding: 35px 20px;
  h5 {
    color: var(--text-color);
    font-size: 18px;
    font-weight: 500;
  }
  h4 {
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

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, auto));
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;
  cursor: pointer;
  border-radius: 15px;
`;
export const AboutImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  
  @media (max-width: 540px){
    img {
      width: 75%;
  }
  }
`;