import { HomeImage, HomeSec, HomeText, Latter, Btn } from "assets/styledComponents/homeStyles";
import homeSvg from "assets/images/home.svg";

function HomeSection() {
  return (
    <HomeSec id="home">
      <HomeText className="home-text">
        <h6>Best digital library</h6>
        <h1>Accessible Online library For All</h1>
        <p>Own your future learning new skills online</p>
        <Latter>
          <Btn>Cadastre-se na Bookshelf</Btn>
        </Latter>
      </HomeText>

      <HomeImage>
        <img src={homeSvg} alt="home" />
      </HomeImage>
    </HomeSec>
  );
}

export default HomeSection;
