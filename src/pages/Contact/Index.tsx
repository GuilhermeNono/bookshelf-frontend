import React from "react";
import { Card } from "../../Components/Card";
import { GlobalStyle } from "../../styles/global";
import { CardsDiv, MainDiv, Space } from "./styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderPolygon from "../../components/HeaderPolygon/Index";
import Svg from "../../components/HeaderPolygon/Index";

const Contact = () => {
  return (
    <MainDiv>
      <Header />

      <Space></Space>

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

    </MainDiv>
  );
};

export default Contact;
