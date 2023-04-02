import { Container } from "assets/styledComponents/pricingStyles";
import Header from "./components/Top";
import Card from "./components/Card";
import Tables from "./components/Tables";

function Pricing() {
  return (
    <Container>
      <Header />
      <Card />
      <Tables />
    </Container>
  );
}

export default Pricing;
