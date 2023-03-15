import { Row } from "react-bootstrap";
import {
  Container,
  OneRow,
  BoxForm,
  Titulo,
  Botao,
  Col,
  Input,
  Link,
  TituloContainer,
  TitleBox,
  Spacing,
  H2,
  Info,
  LabelFloat,
  Body,
  Backto,
  PButton,
  RegBox,
  NameDiv,
  Subtitle,
  ImgBack,
} from "./styles";

function Register() {
  return (
    <Container>
      <Backto href="/login">
        <ImgBack src="public/assets/images/svg/backto.png" alt="" />
      </Backto>
      <Body>
        <RegBox>
          <BoxForm>
            {/* <TitleBox>
            <Titulo>Registro</Titulo>
          </TitleBox>*/}

            <Col>
              <H2>Criar uma conta na Bookshelf</H2>
              <Info>
                Para utilizar os serviços é preciso ter uma conta em nosso
                sistema.
              </Info>
            </Col>
            <form>
              <LabelFloat>
                <NameDiv>
                  <div>
                    <Subtitle>Nome</Subtitle>
                    <Input type="text" name="nome" placeholder="" />
                  </div>
                  <Spacing />
                  <div>
                    <Subtitle>Sobrenome</Subtitle>
                    <Input type="text" name="nome" placeholder="" />
                  </div>
                </NameDiv>
              </LabelFloat>

              <LabelFloat>
                <Subtitle>E-mail</Subtitle>
                <Input
                  type="email"
                  name="nome"
                  placeholder="Informe seu email"
                />
              </LabelFloat>

              <LabelFloat>
                <Subtitle>Senha</Subtitle>
                <Input
                  type="password"
                  name="senha"
                  placeholder="Informe sua senha"
                />
              </LabelFloat>

              <LabelFloat>
                <Subtitle>Confirmar senha</Subtitle>
                <Input type="password" name="confSenha" placeholder="" />
              </LabelFloat>
            </form>
            <Info></Info>
            <PButton>
              <Botao type="submit" value="Enviar" />
            </PButton>
          </BoxForm>
        </RegBox>
      </Body>
    </Container>
  );
}

export default Register;
