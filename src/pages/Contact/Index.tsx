import { Card } from "../../components/ContactPageComponents/Card";
import { CardsDiv, MainDiv, Space, Poly } from "./styles";
import Footer from "../../components/ContactPageComponents/Footer";
import Header from "../../components/ContactPageComponents/Header";
import ContactContainer from "../../components/ContactPageComponents/ContactContainer";
import { GlobalStyle } from "../../styles/global";

const Contact = () => {
  return (
    <MainDiv>
      <GlobalStyle />
      <Header></Header>

      <CardsDiv>
        <Card
          title="E-Mail"
          imageUrl="public/assets/images/svg/ContactPage/Cards/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Telefone"
          imageUrl="public/assets/images/svg/ContactPage/Cards/telephone-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Whatsapp"
          imageUrl="public/assets/images/svg/ContactPage/Cards/whatapp-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />
      </CardsDiv>
      <ContactContainer></ContactContainer>
      <Footer></Footer>
    </MainDiv>
  );
};

export default Contact;
