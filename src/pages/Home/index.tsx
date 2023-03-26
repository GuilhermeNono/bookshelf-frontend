import { Button, Form, FormGroup, Input } from "reactstrap";
import AboutSection from "./components/AboutSec";
import CategoriesSection from "./components/CategoriesSec";
import ContactSection from "./components/ContactSec";
import ContainerSection from "./components/ContainerSec";
import CtaSection from "./components/CtaSec";
import HomeSection from "./components/HomeSec";

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
