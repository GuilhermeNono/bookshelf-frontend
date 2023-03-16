import { Button, Form, FormGroup, Input } from "reactstrap";
import AboutSection from "./Components/AboutSec";
import CategoriesSection from "./Components/CategoriesSec";
import ContactSection from "./Components/ContactSec";
import ContainerSection from "./Components/ContainerSec";
import CtaSection from "./Components/CtaSec";
import HomeSection from "./Components/HomeSec";

const Home = () => {
  return (
    <>
      {/*start home section*/}

      <HomeSection />

      {/*start container section*/}

      <ContainerSection />

      {/*start categories section*/}

      <CategoriesSection />

      {/*start about section*/}
      
      <AboutSection />

      {/*start cta section*/}
      <CtaSection />

      {/*start contact section*/}
      <ContactSection />
    </>
  );
};

export default Home;
