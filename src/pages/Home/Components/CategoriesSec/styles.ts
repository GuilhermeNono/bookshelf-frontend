import styled from 'styled-components';

export const Categories = styled.section``;

export const CategoriesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.5rem;
  align-items: center;
  cursor: pointer;
  text-align: center;
  margin-top: 4rem;
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