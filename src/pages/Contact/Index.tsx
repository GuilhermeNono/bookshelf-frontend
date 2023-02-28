import React from "react";
import Card from "../../components/Card";
import { GlobalStyle } from "../../styles/global";
import ContactContainer from "../../components/ContactContainer/index";
import { CardsDiv, MainDiv } from "./styles";
import Footer from "../../components/Footer/Index";
import Header from "../../components/Header/Index";
import HeaderPolygon from "../../components/HeaderPolygon/Index";
import Svg from "../../components/HeaderPolygon/Index";

const Contact = () => {
  return (
    <MainDiv>
       <Header/>
      <HeaderPolygon />
     
      <GlobalStyle />
      <CardsDiv>
        <Card
          title="E-Mail"
          imageUrl="/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Telefone"
          imageUrl="/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Whatsapp"
          imageUrl="/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />
      </CardsDiv>

      <ContactContainer />
      <Footer />
    </MainDiv>
  );
};

export default Contact;
