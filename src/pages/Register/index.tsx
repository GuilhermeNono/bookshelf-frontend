import { useState } from "react";
import FirstForm from "../../components/RegisterSection/FirstForm";
import SecondForm from "../../components/RegisterSection/SecondForm";
import { Container, Body, Backto, RegBox, ImgBack } from "./styles";

function Register() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [fisrtFormComplete, setFirstFormComplete] = useState(false);

  console.log(firstName);

  const handleFirstSubmit = () => {};

  console.log(fisrtFormComplete);
  const changeState = () => {
    setFirstFormComplete(!fisrtFormComplete)
  }

  return (
    <Container>
      <button onClick={changeState}>É esse</button>
      <Backto href="/login">
        <ImgBack src="assets/images/svg/backto.png" alt="" />
      </Backto>
      <Body>
      
        <RegBox>
          {/* Componente 1 */}
          {fisrtFormComplete ?  <FirstForm /> : <SecondForm />}
          
        </RegBox>
      </Body>
    </Container>
  );
}

export default Register;
