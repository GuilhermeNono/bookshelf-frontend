// import Footer from '../../components/Footer'
// import Header from '../../components/Header'
import {
  Header,
  LinkLogo,
  Logo,
  NavBar,
  NavBarLinks,
  HeaderIcons,
  HeaderIcon,
  HeaderLink,
  MenuIcon,
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
  ContactSec,
  MainContact,
  ContactContent,
} from "./styles";

const Home = () => {
  return (
    <>
      <Header>
        <LinkLogo href="#" className="logo">
          <Logo src="img/logo.svg" />
        </LinkLogo>

        <NavBar>
          <NavBarLinks>
            <a href="#home">Home</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="#categories">Categories</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="#courses">Courses</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="#about">About Us</a>
          </NavBarLinks>
          <NavBarLinks>
            <a href="#contact">Contact</a>
          </NavBarLinks>
        </NavBar>

        <HeaderIcons>
          <HeaderLink href="#">
            <HeaderIcon className="bx bx-user"></HeaderIcon>
          </HeaderLink>
          <HeaderLink href="#">
            <HeaderIcon className="bx bx-heart"></HeaderIcon>
          </HeaderLink>
          <HeaderLink href="#">
            <HeaderIcon className="bx bx-cart"></HeaderIcon>
          </HeaderLink>
          <MenuIcon className="bx bx-menu"></MenuIcon>
        </HeaderIcons>
      </Header>

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
          <img src="img/home.png" />
        </HomeImage>
      </HomeSec>

      {/*start container section*/}
      <ContainerSec>
        <ContainerBox>
          <ContainerImage>
            <img src="img/con1.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>5K</h4>
            <p>Online Courses</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="img/con2.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>5K</h4>
            <p>Online Courses</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="img/con3.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>5K</h4>
            <p>Online Courses</p>
          </ContainerText>
        </ContainerBox>

        <ContainerBox>
          <ContainerImage>
            <img src="img/con4.svg" />
          </ContainerImage>
          <ContainerText>
            <h4>5K</h4>
            <p>Online Courses</p>
          </ContainerText>
        </ContainerBox>
      </ContainerSec>

      {/*start categories section*/}
      <Categories id="categories">
        <CenterText>
          <h5>CATEGORIES</h5>
          <h2>Popular Categories</h2>
        </CenterText>

        <CategoriesContent>
          <Box>
            <img src="img/cate1.png" />
            <h3>Angular Development</h3>
            <p>5 Courses</p>
          </Box>

          <Box>
            <img src="img/cate2.png" />
            <h3>Angular Development</h3>
            <p>5 Courses</p>
          </Box>

          <Box>
            <img src="img/cate3.png" />
            <h3>Angular Development</h3>
            <p>5 Courses</p>
          </Box>

          <Box>
            <img src="img/cate4.png" />
            <h3>Angular Development</h3>
            <p>5 Courses</p>
          </Box>
        </CategoriesContent>

        <MainBtn>
          <Btn href="#">All Categories</Btn>
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

      {/*start contact section*/}
      <ContactSec id="contact">
        <MainContact>
          <ContactContent>
            <img src="img/logo.svg" />
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Instructor</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
          </ContactContent>

          <ContactContent>
            <li>
              <a href="#">
                San Francisco,
                <br /> California, CA 94108{" "}
              </a>
            </li>
            <li>
              <a href="#">dreamslms@example.com</a>
            </li>
            <li>
              <a href="#">01646895741</a>
            </li>
          </ContactContent>
        </MainContact>
      </ContactSec>

      <div className="last-text">
        <p>© 2022 Tahmid Ahmed. All rights reserved.</p>
      </div>
    </>
  );
};

export default Home;
