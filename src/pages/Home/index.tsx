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
} from "./styles";

const Home = () => {
  return (
    <>
      {/*start home section*/}
      <HomeSec id="home">
        <HomeText className="home-text">
          <h6>Best online learning platform</h6>
          <h1>Accessible Online Courses For All</h1>
          <p>Own your future learning new skills online</p>
          <Latter>
            <LatterForm>
              <input type="email" placeholder="Write Your Email" required />
              <input type="submit" value="Let's Start" required />
            </LatterForm>
          </Latter>
        </HomeText>

        <HomeImage>
          <img src="assets/images/svg/home.svg" />
        </HomeImage>
      </HomeSec>

      {/*start container section*/}
      <ContainerSec>
        <ContainerBox>
          <ContainerImage>
            <img src="assets/images/svg/InterfaceAmigavel.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>Interface amigavel</h4>
            <p>Simples de aprender</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="assets/images/svg/Security.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>Seguro</h4>
            <p>Segurança de dados</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="assets/images/svg/Gear.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>Gerenciavel</h4>
            <p>Gerenciamento completo</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="assets/images/svg/Handshake.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>Para todos</h4>
            <p>Disponivel para todos</p>
          </ContainerText>
        </ContainerBox>
      </ContainerSec>

      {/*start categories section*/}
      <Categories id="categories">
        <CenterText>
          <h5>Serviços</h5>
          <h2>Principais Serviços</h2>
        </CenterText>

        <CategoriesContent>
          <Box>
            <img src="assets/images/svg/cate1.svg" />
            <h3>Controle de emprestimos</h3>
            <p>Tenha total controle nos emprestimos de livros.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate2.svg" />
            <h3>Acervo Digital</h3>
            <p>Adicione, remova e Controle seu acervo de maneira digital.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate3.svg" />
            <h3>Gerenciamento de usuarios</h3>
            <p>Cadastre e gerencie todos os seus leitores.</p>
          </Box>

          <Box>
            <img src="assets/images/svg/cate4.svg" />
            <h3>Relatorio final</h3>
            <p>Possibilidade de emitir um relatorio mensal da biblioteca.</p>
          </Box>
        </CategoriesContent>

        <MainBtn>
          <Btn href="#">Contratar serviços</Btn>
        </MainBtn>
      </Categories>

      {/*start course section*/}
      <CourseSec id="courses">
        <CourseText>
          <h5>COURSES</h5>
          <h2>Explore Popular Courses</h2>
        </CourseText>

        <CourseContent>
          <Row>
            <img src="img/course1.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>5 Reviews</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>

          <Row>
            <img src="img/course2.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>{"5 Reviews"}</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>

          <Row>
            <img src="img/course3.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>{"5 Reviews"}</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>

          <Row>
            <img src="img/course4.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>{"5 Reviews"}</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>

          <Row>
            <img src="img/course5.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>{"5 Reviews"}</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>

          <Row>
            <img src="img/course1.jpg" />
            <CourseText>
              <h5>$20.00</h5>
              <h3>The Complete HTML CSS JS Course 2022</h3>
              <h6>05 hours 15 minutes</h6>
              <Rating>
                <Star>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </Star>
                <Review>
                  <p>{"5 Reviews"}</p>
                </Review>
              </Rating>
            </CourseText>
          </Row>
        </CourseContent>

        <MainBtn>
          <Btn href="#">Buy Now</Btn>
        </MainBtn>
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
        <AboutImage>
          <img src="img/about.png" />
        </AboutImage>

        <AboutText>
          <h2>Want to share your knowledge? Join us a Mentor</h2>
          <p>
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
          <h4>Best Courses</h4>
          <h5>Top rated Instructors</h5>
          <Btn href="#">Read More</Btn>
        </AboutText>
      </AboutSec>
    </>
  );
};

export default Home;
