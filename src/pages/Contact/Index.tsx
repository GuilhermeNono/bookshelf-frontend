import React from "react";
import { Card } from "../../components/ContactPageComponents/Card";
import { GlobalStyle } from "../../styles/global";
import { CardsDiv, MainDiv, Space, Poly } from "./styles";
import Footer from "../../components/ContactPageComponents/Footer";
import Header from "../../components/ContactPageComponents/Header";
import ContactContainer from "../../components/ContactPageComponents/ContactContainer";

import image from "public/assets/images/svg/Back.svg";

const Contact = () => {
  return (
    <MainDiv>
      <Header></Header>
      <Space></Space>

      <CardsDiv>
        <Card
          title="E-Mail"
          imageUrl="public/assets/images/svg/Cards/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Telefone"
          imageUrl="public/assets/images/svg/Cards/telephone-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Whatsapp"
          imageUrl="public/assets/images/svg/Cards/whatapp-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />
      </CardsDiv>
      <ContactContainer></ContactContainer>
      <Footer></Footer>
    </MainDiv>
  );
};

export default Contact;
