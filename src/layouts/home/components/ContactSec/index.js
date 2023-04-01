import {
  ContactSec,
  ContactText,
  ContainerContact,
  IconContact,
} from "assets/styledComponents/homeStyles";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import phone from "assets/images/phone.svg";
import email from "assets/images/email.svg";
import location from "assets/images/location.svg";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactSec id="contact">
      <ContactText>
        <h2>Ficou com alguma duvida?</h2>
        <p>
          Caso tenha alguma duvida, por favor, nos contate pelos canais abaixo, ou preencha o
          formulario ao lado e retornaremos o mais breve possivel.
        </p>
        <h4>Entre em contato usando os canais abaixo</h4>
        <h5>ou Complete o formulario ao lado</h5>

        <ContainerContact>
          <IconContact>
            <img src={phone} alt="phone" />
            <h4>Phone</h4>
          </IconContact>
          <h5>+55 14 99999-9999</h5>
        </ContainerContact>

        <ContainerContact>
          <IconContact>
            <img src={email} alt="phone" />
            <h4>E-mail</h4>
          </IconContact>
          <h5>Bookshelf@support.com</h5>
        </ContainerContact>

        <ContainerContact>
          <IconContact>
            <img src={location} alt="phone" />
            <h4>Location</h4>
          </IconContact>
          <h5>Blablabla 402, Jorge mauricio, Barra bonita, BR</h5>
        </ContainerContact>
      </ContactText>

      <MDBox component="form" onSubmit={handleSubmit} role="form">
        <MDBox mb={5}>
          <MDInput type="text" label="Seu nome" />
        </MDBox>
        <MDBox mb={5}>
          <MDInput type="text" label="Endereço de e-mail" />
        </MDBox>
        <MDBox mb={5}>
          <MDInput type="text" label="Título" />
        </MDBox>
        <MDBox mb={5}>
          <MDInput type="textarea" label="Menssagem" />
        </MDBox>
        <MDButton type="submit" color="primary">
          Enviar
        </MDButton>
      </MDBox>
    </ContactSec>
  );
}

export default ContactSection;
