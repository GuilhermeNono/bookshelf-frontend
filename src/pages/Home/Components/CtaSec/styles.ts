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
 img{
    height: auto;
    width: 100%;
    border-radius: 6px;
  }

  @media (min-width: 540px) {
    img{
      width: 75%;
    }
  }


`;

export const CtaText = styled.div`
text-align: left;
  h3 {
    color: var(--text-color);
    font-size: var(--p-font);
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 1.2em;
  }
  h4 {
    color: var(--text-color);
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 2em;
  }
`