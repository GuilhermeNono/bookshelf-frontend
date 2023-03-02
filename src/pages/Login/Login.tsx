import {
  Container,
  OneRow,
  Box,
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
} from "./Styles";

function Login() {
  return (
    <Body>
      <Box>
        <TitleBox>
          <Titulo>Login</Titulo>
        </TitleBox>
        <Container>
          <OneRow>
            <svg
              width="40"
              height="43"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4.22865C0 3.10921 0.431741 2.03563 1.20025 1.24407C1.96875 0.452509 3.01107 0.00781606 4.0979 0.00781606H8.19579C8.94161 0.00781606 9.64235 0.212526 10.2447 0.573407C10.8673 0.201985 11.5742 0.00685067 12.2937 0.00781606H16.3916C17.8812 0.00781606 19.1863 0.826658 19.9035 2.05281C20.3338 1.69826 20.8378 1.42813 21.4033 1.27196L25.3619 0.18087C25.8817 0.0372415 26.4239 0.000498662 26.9576 0.0727406C27.4912 0.144983 28.0058 0.324794 28.472 0.601905C28.9381 0.879017 29.3467 1.248 29.6744 1.68778C30.0021 2.12756 30.2425 2.62952 30.3818 3.165L38.8644 35.7815C39.0039 36.3169 39.0396 36.8754 38.9694 37.4251C38.8993 37.9747 38.7247 38.5047 38.4557 38.9849C38.1866 39.465 37.8284 39.8859 37.4014 40.2234C36.9744 40.5609 36.4871 40.8085 35.9672 40.952L32.0087 42.0431C31.4888 42.1867 30.9466 42.2235 30.413 42.1512C29.8793 42.079 29.3647 41.8992 28.8986 41.622C28.4324 41.3449 28.0238 40.976 27.6961 40.5362C27.3684 40.0964 27.1281 39.5944 26.9887 39.059L20.4895 14.0695V37.9953C20.4895 39.1147 20.0577 40.1883 19.2892 40.9799C18.5207 41.7714 17.4784 42.2161 16.3916 42.2161H12.2937C11.5742 42.2171 10.8673 42.022 10.2447 41.6505C9.62216 42.022 8.91526 42.2171 8.19579 42.2161H4.0979C3.01107 42.2161 1.96875 41.7714 1.20025 40.9799C0.431741 40.1883 0 39.1147 0 37.9953V4.22865ZM4.0979 4.22865H8.19579V37.9953H4.0979V4.22865ZM16.3916 37.9953H12.2937V4.22865H16.3916V37.9953ZM22.4626 5.34928L26.4212 4.25819L34.9079 36.8747L30.9494 37.9658L22.4626 5.34928V5.34928Z"
                fill="#1B8EF2"
              />
            </svg>
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
            <p style={{ paddingRight: 15 }}>
              <Botao type="submit" value="Entrar" />
            </p>
          </Spacing>
        </Container>
      </Box>
    </Body>
  );
}

export default Login;
