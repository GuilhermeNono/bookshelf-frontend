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
import TextField from "@mui/material/TextField";

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
          <TextField type="text" label="Nome" variant="standard" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <TextField type="text" label="Endereço de e-mail" variant="standard" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <TextField type="text" label="Título" variant="standard" fullWidth />
        </MDBox>
        <MDBox mb={5}>
          <TextField
            multiline
            rows={5}
            type="textarea"
            label="Menssagem"
            variant="standard"
            fullWidth
          />
        </MDBox>
        <MDButton type="submit" color="info">
          Enviar
        </MDButton>
      </MDBox>
    </ContactSec>
  );
}

export default ContactSection;
