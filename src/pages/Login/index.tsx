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
  Logo,
  PButton,
} from "./styles";

function Login() {
  return (
    <Container>
      <Body>
        <TitleBox>
          <Titulo>Login</Titulo>
        </TitleBox>
        <BoxForm> 
          <OneRow>
            <Logo />
            <TituloContainer>BookShelf</TituloContainer>
          </OneRow>
          <Col>
            <H2>Entrar</H2>
            <Info>
              Entre em sua conta para utilizar dos recursos do sistema.
            </Info>
          </Col>
          <form>
            <LabelFloat>
              <Input type="email" name="nome" placeholder="Informe seu email" />
            </LabelFloat>
            <LabelFloat>
              <Input
                type="password"
                name="senha"
                placeholder="Informe sua senha"
              />
            </LabelFloat>
          </form>
          <OneRow style={{ paddingTop: 0 }}>
            <Info>
              Não tem uma conta? <Link href="#">Crie uma!</Link>
            </Info>
          </OneRow>
          <Spacing>
            <Info>
              <Link href="#">Esqueci minha senha</Link>
            </Info>
            <PButton>
              <Botao type="submit" value="Entrar" />
            </PButton>
          </Spacing>
        </BoxForm>
      </Body>
    </Container>
  );
}

export default Login;
