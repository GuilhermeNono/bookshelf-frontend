import AboutSec from "layouts/home/components/AboutSec";
import ContactSec from "layouts/home/components/ContactSec";
import CtaSec from "layouts/home/components/CtaSec";
import ContainerSec from "layouts/home/components/ContainerSec";
import HomeSec from "layouts/home/components/HomeSec";
import CategoriesSection from "layouts/home/components/CategoriesSec";
import { Container } from "assets/styledComponents/homeStyles";

function Home() {
  return (
    <Container>
      <HomeSec />
      <ContainerSec />
      <CategoriesSection />
      <AboutSec />
      <CtaSec />
      <ContactSec />
    </Container>
  );
}

export default Home;
