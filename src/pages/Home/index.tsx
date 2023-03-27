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
      <HomeSection />
      <ContainerSection />
      <CategoriesSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
    </>
  );
};

export default Home;
