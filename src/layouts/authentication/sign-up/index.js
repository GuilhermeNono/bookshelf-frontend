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

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
// import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

// Authentication layout components

// Images
import bgImage from "assets/images/bg-register.svg";
// eslint-disable-next-line import/order
import { Inner } from "assets/styledComponents/registerStyles";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
import { useAuthentication } from "hooks/useAuthentication";
import BasicLayout from "../components/BasicLayout";

function Cover() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [lockButton, setLockButton] = useState(true);

  // errors
  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [birthDayError, setBirthDayError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [genderError, setGenderError] = useState(false);

  // functions

  const auth = useAuthentication();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.createUser(
      name,
      lastName,
      email,
      password,
      confirmPassword,
      birthDay,
      phone,
      gender,
      1,
      cpf
    );
    return navigate("/dashboard");
  };

  // Check if all fields are filled
  useEffect(() => {
    const isNameValid = name && name.length >= 3;
    const isLastNameValid = lastName && lastName.length >= 3;
    const isEmailValid = email && email.includes("@");
    const isPasswordValid = password && password.length >= 6;
    const isConfirmPasswordValid = confirmPassword && confirmPassword === password;
    const isCpfValid = cpf && cpf.length === 11;
    const isBirthDayValid = birthDay;
    const isPhoneValid = phone && phone.length >= 10;
    const isGenderValid = gender && (gender === "Male" || gender === "Female");

    if (
      isNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isCpfValid &&
      isBirthDayValid &&
      isPhoneValid &&
      isGenderValid
    ) {
      return setLockButton(false);
    }
    const setErrors = () => {
      setNameError(name ? !isNameValid : false);
      setLastNameError(lastName ? !isLastNameValid : false);
      setEmailError(email ? !isEmailValid : false);
      setPasswordError(password ? !isPasswordValid : false);
      setConfirmPasswordError(confirmPassword ? !isConfirmPasswordValid : false);
      setCpfError(cpf ? !isCpfValid : false);
      setBirthDayError(birthDay ? !isBirthDayValid : false);
      setPhoneError(phone ? !isPhoneValid : false);
      setGenderError(gender ? !isGenderValid : false);
    };

    setErrors();
    return setLockButton(true);
  }, [name, lastName, email, password, confirmPassword, cpf, birthDay, phone, gender]);

  return (
    <BasicLayout image={bgImage}>
      <Inner darkMode={darkMode}>
        <MDBox ml={3}>
          <MDBox ml={3}>
            <MDTypography variant="h2" fontWeight="medium" color="info" mt={4}>
              CRIAR CONTA
            </MDTypography>
            <MDTypography
              display="block"
              variant="button"
              color={darkMode ? "white" : "unfocussubtitle"}
              my={1}
            >
              Para utilizar os serviços é preciso ter uma conta em nosso sistema.
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox onSubmit={handleSubmit} component="form" role="form">
              <MDBox
                mb={2}
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <MDInput
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  label="Nome"
                  variant="outlined"
                  error={nameError}
                  helperText={nameError ? "O nome precisa ter pelo menos 3 caracteres" : ""}
                />
                <MDInput
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type="text"
                  label="Sobrenome"
                  variant="outlined"
                  error={lastNameError}
                  helperText={lastNameError ? "O sobrenome deve ter pelo menos 3 caracteres" : ""}
                />
              </MDBox>
              <MDBox mb={5}>
                <MDInput
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  error={emailError}
                  helperText={emailError ? "O e-mail deve ser válido" : ""}
                  fullWidth
                />
              </MDBox>
              <MDBox
                mb={2}
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <MDInput
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  label="Senha"
                  variant="outlined"
                  error={passwordError}
                  helperText={passwordError ? "A senha deve ter pelo menos 6 caracteres" : ""}
                />
                <MDInput
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                  label="Confirmar senha"
                  variant="outlined"
                  error={confirmPasswordError}
                  helperText={confirmPasswordError ? "As senhas não conferem" : ""}
                />
              </MDBox>
              <MDBox
                mb={5}
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <MDInput
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                  type="number"
                  label="CPF"
                  variant="outlined"
                  error={cpfError}
                  helperText={cpfError ? "O CPF está incorreto" : ""}
                />
                <MDInput
                  onChange={(e) => setBirthDay(e.target.value)}
                  value={birthDay}
                  type="date"
                  variant="outlined"
                  error={birthDayError}
                  helperText={birthDayError ? "A data de nascimento é obrigatória" : ""}
                />
              </MDBox>
              <MDBox
                mb={5}
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                <MDInput
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="number"
                  label="Celular"
                  variant="outlined"
                  error={phoneError}
                  helperText={phoneError ? "O telefone é obrigatório" : ""}
                />
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="gender-label">Sexo</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Sexo"
                    style={{ height: "44.13px" }}
                    error={genderError}
                    helperText={genderError ? "O gênero é obrigatório" : ""}
                  >
                    <MenuItem value="">Selecione</MenuItem>
                    <MenuItem value="Male">Masculino</MenuItem>
                    <MenuItem value="Female">Feminino</MenuItem>
                  </Select>
                </FormControl>
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Eu concordo com os&nbsp;
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  Termos e Condições
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton
                  type="submit"
                  variant="gradient"
                  color="info"
                  disabled={lockButton}
                  fullWidth
                >
                  Continuar
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Inner>
    </BasicLayout>
  );
}

export default Cover;
