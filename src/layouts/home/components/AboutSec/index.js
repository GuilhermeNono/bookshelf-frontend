import {
  Btn,
  CenterText,
  AboutContent,
  AboutSec,
  AboutText,
  AboutImage,
} from "assets/styledComponents/homeStyles";

import about from "assets/images/about.png";

function AboutSection() {
  return (
    <AboutSec id="about">
      <CenterText>
        <h5>Sobre nós</h5>
        <h2>Saiba um pouco mais sobre a Bookshelf</h2>
      </CenterText>

      <AboutContent>
        <AboutImage>
          <img src={about} alt="about" />
        </AboutImage>

        <AboutText>
          <h2>Oque é a Bookshelf</h2>
          <p>
            Somos uma Startup com o foco de trazer uma melhor experiencia para usuarios que
            frequentam bibliotecas. Além disso, o sistema foi desenvolvido e pensado para que tenha
            uma curva de aprendizado baixa para qualquer pessoa de qualquer idade. Organização é
            muito importante quando falamos de uma biblioteca, por isso a BookShelf veio para
            resolver esse problema e trazer a oportunidade para qualquer biblioteca, seja ela, de
            pequeno ou medio porte com um preço acessivel.
          </p>
          <h4>Prezamos pela qualidade</h4>
          <h5>Sempre trazendo novidades</h5>
          <Btn href="/register">Crie sua conta</Btn>
        </AboutText>
      </AboutContent>

      {/* <MainBtn>
      <Btn href="#">Buy Now</Btn>
    </MainBtn> */}
    </AboutSec>
  );
}

export default AboutSection;
