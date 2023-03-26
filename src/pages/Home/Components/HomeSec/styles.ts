import styled from 'styled-components';

export const HomeSec = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background: var(--bg-color);
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;

  @media (max-width: 1050px) {
    height: 84vh;
    :root {
      --big-font: 3.2rem;
      --h2-font: 2rem;
      --p-font: 1rem;
      transition: 0.1s;
    }
  }
  @media (max-width: 890px) {
    height: 150vh;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  @media (max-width: 600px) {
    height: 120vh;
  }
`;

export const HomeText = styled.div`
  h1 {
    font-size: var(--big-font);
    margin: 15px 0 15px;
  }

  h6 {
    color: var(--text-subtitle);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  p {
    color: var(--text-subtitle);
    font-size: var(--p-font);
    font-weight: 500;
    margin-bottom: 48px;
  }
  @media (max-width: 890px) {
    padding-top: 20px;
  }
`;
export const Latter = styled.div``;

export const LatterForm = styled.form`
  width: 100%;
  max-width: 460px;
  position: relative;

  input:first-child {
    display: inline-block;
    width: 100%;
    outline: none;
    padding: 16px 140px 16px 15px;
    border: 2px solid var(--main-color);
    border-radius: 30px;
  }

  input:last-child {
    position: absolute;
    display: inline-block;
    border: none;
    outline: none;
    background: var(--main-color);
    color: var(--text-subtitle);
    padding: 16px 40px;
    border-radius: 30px;
    cursor: pointer;
    top: 2px;
    right: 1px;
  }
`;

export const HomeImage = styled.div`
  img {
    height: auto;
    width: 100%;
  }
  @media (max-width: 890px) {
    text-align: center;
  }
  img {
    height: auto;
    width: 100%;
  }
`;