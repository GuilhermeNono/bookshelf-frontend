import styled from "styled-components";

export const ContactSec = styled.section`
  padding: 60px 13%;
  background: #335675;

  @media (max-width: 1410px) {
    padding: 60px 3%;
    transition: 0.2s;
  }
`;

export const MainContact = styled.div`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 2rem;
`;

export const ContactContent = styled.div`
  img {
    height: auto;
    width: 160px;
    max-width: 100%;
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 18px;
  }
  li a {
    list-style-type: none;
    display: block;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    transition: all 0.4s ease;
  }
  li a:hover {
    transform: translateX(10px);
    color: #1b8ef2;
  }
`;
