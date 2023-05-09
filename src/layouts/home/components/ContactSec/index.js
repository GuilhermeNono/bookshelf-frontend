import {
  ContactSec,
  ContactText,
  ContainerContact,
  IconContact,
} from "assets/styledComponents/homeStyles";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import phone from "assets/images/phone.svg";
import email from "assets/images/email.svg";
import location from "assets/images/location.svg";
import InputHome from "../../../../assets/theme/components/form/inputHome";

/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

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

        <ContainerContact>
          <IconContact>
            <img src={phone} alt="phone" />
            <h4>Phone</h4>
          </IconContact>
          <h6>+55 14 99999-9999</h6>
        </ContainerContact>

        <ContainerContact>
          <IconContact>
            <img src={email} alt="phone" />
            <h4>E-mail</h4>
          </IconContact>
          <h6>Bookshelf@support.com</h6>
        </ContainerContact>

        <ContainerContact>
          <IconContact>
            <img src={location} alt="phone" />
            <h4>Location</h4>
          </IconContact>
          <h6>Blablabla 402, Jorge mauricio, Barra bonita, BR</h6>
        </ContainerContact>
      </ContactText>

      <MDBox component="form" onSubmit={handleSubmit} role="form">
        <MDBox mb={5}>
          <InputHome type="text" placeholder="Nome" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <InputHome type="text" placeholder="Endereço de e-mail" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <InputHome type="text" placeholder="Título" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <InputHome multiline rows={5} type="textarea" placeholder="Menssagem" fullWidth />
        </MDBox>
        <MDButton type="submit" color="info">
          Enviar
        </MDButton>
      </MDBox>
    </ContactSec>
  );
}

export default ContactSection;
