import { Button, Form, FormGroup, Input } from "reactstrap";
import CategoriesSection from "./Components/CategoriesSec";
import ContainerSection from "./Components/ContainerSec";
import HomeSection from "./Components/HomeSec";
import {
  HomeSec,
  HomeText,
  Latter,
  LatterForm,
  HomeImage,
  ContainerSec,
  ContainerBox,
  ContainerImage,
  ContainerText,
  Categories,
  CenterText,
  CategoriesContent,
  Box,
  MainBtn,
  Btn,
  CourseSec,
  CourseText,
  CourseContent,
  Row,
  Rating,
  Star,
  Review,
  CtaSec,
  CtaContent,
  CtaImage,
  AboutSec,
  AboutImage,
  AboutText,
  FormContact,
  ContainerContact,
  IconContact,
} from "./styles";

const Home = () => {
  return (
    <>
      {/*start home section*/}

      <HomeSection />

      {/*start container section*/}

      <ContainerSection />

      {/*start categories section*/}

      <CategoriesSection />

      {/*start course section*/}
      
      <CourseSec id="courses">
        <CourseText>
          <h5>Sobre nós</h5>
          <h2>Saiba um pouco mais sobre a Bookshelf</h2>
        </CourseText>

        <CourseContent>
          <AboutImage>
            <img src="img/about.png" />
          </AboutImage>

          <AboutText>
            <h2>Oque é a Bookshelf</h2>
            <p>
              Somos uma Startup com o foco de trazer uma melhor experiencia para
              usuarios que frequentam bibliotecas. Além disso, o sistema foi
              desenvolvido e pensado para que tenha uma curva de aprendizado
              baixa para qualquer pessoa de qualquer idade. Organização é muito
              importante quando falamos de uma biblioteca, por isso a BookShelf
              veio para resolver esse problema e trazer a oportunidade para
              qualquer biblioteca, seja ela, de pequeno ou medio porte com um
              preço acessivel.
            </p>
            <h4>Prezamos pela qualidade</h4>
            <h5>Sempre trazendo novidades</h5>
            <Btn href="/register">Crie sua conta</Btn>
          </AboutText>
        </CourseContent>

        {/* <MainBtn>
          <Btn href="#">Buy Now</Btn>
        </MainBtn> */}
      </CourseSec>

      {/*start cta section*/}
      <CtaSec>
        <CenterText>
          <h5>Trusted By</h5>
          <h2>500+ Leading Universities And Companies</h2>
        </CenterText>

        <CtaContent>
          <CtaImage>
            <img src="img/cta1.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta2.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta3.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta4.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta5.png" />
          </CtaImage>

          <CtaImage>
            <img src="img/cta6.png" />
          </CtaImage>
        </CtaContent>
      </CtaSec>

      {/*start about section*/}
      <AboutSec id="about">
        <AboutText>
          <h2>Ficou com alguma duvida?</h2>
          <p>
            Caso tenha alguma duvida, por favor, nos contate pelos canais
            abaixo, ou preencha o formulario ao lado e retornaremos o mais breve
            possivel.
          </p>
          <h4>Entre em contato usando os canais abaixo</h4>
          <h5>ou Complete o formulario ao lado</h5>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/phone.svg" alt="phone"/>
              <h4>Phone</h4>
            </IconContact>
            <h5>+55 14 99999-9999</h5>
          </ContainerContact>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/email.svg" alt="phone"/>
              <h4>E-mail</h4>
            </IconContact>
            <h5>Bookshelf@support.com</h5>
          </ContainerContact>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/location.svg" alt="phone"/>
              <h4>Location</h4>
            </IconContact>
            <h5>Blablabla 402, Jorge mauricio, Barra bonita, BR</h5>
          </ContainerContact>
        </AboutText>

        <Form>
          <FormGroup className="mb-5">
            <Input placeholder="Seu nome" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input placeholder="Endereço de e-mail" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input placeholder="Título" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input type="textarea" placeholder="Menssagem" />
          </FormGroup>
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </Form>
      </AboutSec>
    </>
  );
};

export default Home;
