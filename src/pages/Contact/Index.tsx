import React from "react";
import Card from "../../components/Card";
import { GlobalStyle } from "../../styles/global";
import ContactContainer from "../../components/ContactContainer/index";
import { CardsDiv, MainDiv } from "./styles";

const Contact = () => {
  return (
    <MainDiv>
      <GlobalStyle />
      <CardsDiv>
        <Card
          title="Card Title"
          imageUrl="public/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Card Title"
          imageUrl="public/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />

        <Card
          title="Card Title"
          imageUrl="public/assets/images/svg/email-contact.svg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sem non magna posuere accumsan in non felis. Nullam urna metus, aliquet fringilla aliquet luctus, imperdiet vitae dolor"
        />
      </CardsDiv>

      <ContactContainer />
    </MainDiv>
  );
};

export default Contact;
