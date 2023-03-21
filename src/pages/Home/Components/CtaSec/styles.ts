import styled from "styled-components";

export const CtaSec = styled.section``;

export const CtaContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, auto));
  gap: 2rem;
  align-items: center;
  text-align: center;
  margin-top: 5rem;
`;

export const CtaImage = styled.div`

  display: flex;

  img{
    height: auto;
    width: 550px;
    border-radius: 6px;
  }

  gap: 50px;

`;

export const CtaText = styled.div`
  h2{
    text-align: left;
  }
  p{
    text-align: left;
  }
`