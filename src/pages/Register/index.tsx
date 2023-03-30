import RegForm from "./components/RegForm";
import { Inner, Wrapper, Container } from "./styles";

function Register() {
  return (
    <Container>
      <Wrapper>
        <Inner>
          <RegForm />
        </Inner>
      </Wrapper>
    </Container>
  );
}

export default Register;
