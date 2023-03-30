import styled from "styled-components";
export const ContactSec = styled.section`
  background: var(--bg-second-color);
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
`;

export const ContactText = styled.div`
  h2 {
    font-size: var(--h2-font);
    line-height: 1.2;
    margin-bottom: 20px;
  }
  p {
    font-size: var(--p-font);
    color: var(--second-color);
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  h5 {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;

export const FormContact = styled.form`

  display: flex;
  flex-direction: column;
  gap: 40px;

  button{
    width: 50%;
  }

`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  h5{
    color: var(--bg-color);
  }
`;

export const IconContact = styled.div`
  display: flex;
  gap: 20px;
  h4{
    text-align: center;
    margin: 0;
  }
`;