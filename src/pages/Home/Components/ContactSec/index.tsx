import { Button, Form, FormGroup, Input } from "reactstrap";
import { ContactSec, ContactText, ContainerContact, IconContact } from "./styles";

const ContactSection = () => {
    return (
        <ContactSec id="contact">
        <ContactText>
          <h2>Ficou com alguma duvida?</h2>
          <p>
            Caso tenha alguma duvida, por favor, nos contate pelos canais
            abaixo, ou preencha o formulario ao lado e retornaremos o mais breve
            possivel.
          </p>
          <h4>Entre em contato usando os canais abaixo</h4>
          <h5>ou Complete o formulario ao lado</h5>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/phone.svg" alt="phone"/>
              <h4>Phone</h4>
            </IconContact>
            <h5>+55 14 99999-9999</h5>
          </ContainerContact>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/email.svg" alt="phone"/>
              <h4>E-mail</h4>
            </IconContact>
            <h5>Bookshelf@support.com</h5>
          </ContainerContact>

          <ContainerContact>
            <IconContact>
              <img src="/assets/images/svg/location.svg" alt="phone"/>
              <h4>Location</h4>
            </IconContact>
            <h5>Blablabla 402, Jorge mauricio, Barra bonita, BR</h5>
          </ContainerContact>
        </ContactText>

        <Form>
          <FormGroup className="mb-5">
            <Input placeholder="Seu nome" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input placeholder="Endereço de e-mail" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input placeholder="Título" />
          </FormGroup>
          <FormGroup className="mb-5">
            <Input type="textarea" placeholder="Menssagem" />
          </FormGroup>
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </Form>
      </ContactSec>
    )
}

export default ContactSection;