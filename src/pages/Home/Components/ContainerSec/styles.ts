import styled from 'styled-components';

export const ContainerSec = styled.section`
  padding: 70px 13%;
  display: grid;
  background: var(--bg-second-color);
  background-size: cover;
  background-position: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1410px) {
    padding: 70px 3%;
    transition: 0.2s;
  }
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  padding: 20px 30px;
  box-shadow: -11.729px -11.729px 32px rgb(255 255 255 / 15%);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-15px);
  }
`;

export const ContainerImage = styled.div``;

export const ContainerText = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  p {
    font-size: var(--p-font);
    color: var(--second-color);
    font-weight: 500;
  }
`;