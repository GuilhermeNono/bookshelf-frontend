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

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/registerUser/components/Header";

// Data
import MDTypography from "components/MDTypography";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { isValid, parseISO } from "date-fns";
import { useUsers } from "hooks/useUsers";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

function Overview() {
  /* eslint-disable no-unused-vars */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthyDay, setBirthyDay] = useState("");
  const [phone, setPhone] = useState("");
  // const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [rmRa, setRmRa] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [libId, setLibId] = useState("");
  const [coursesId, setCoursesId] = useState([]);

  // errors
  const [firstNameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [birthyDayError, setBirthyDayError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [genderError, setGenderError] = useState(false);

  const [checkButton, setCheckButton] = useState(false);
  const [lockButton, setLockButton] = useState(true);

  const registerUser = useUsers();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser.createUserDashboard(
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      birthyDay,
      phone,
      // gender,
      1,
      cpf,
      rmRa,
      profilePicture,
      1,
      1,
      coursesId
    );
  };

  useEffect(() => {
    const isFirstNameValid = firstName && firstName.length >= 3;
    const isLastNameValid = lastName && lastName.length >= 3;
    const isEmailValid = email && email.includes("@");
    const isPasswordValid = password && password.length >= 6;
    const isConfirmPasswordValid = confirmPassword && confirmPassword === password;
    const isCpfValid = cpf && cpf.length === 11;
    const isBirthDayValid = birthyDay && isValid(parseISO(birthyDay));
    const isPhoneValid = phone && phone.length >= 10;
    // const isGenderValid = gender && (gender === "Male" || gender === "Female");
    const isCheckValid = checkButton === true;

    const isFormValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isCpfValid &&
      isBirthDayValid &&
      isPhoneValid &&
      // isGenderValid &&
      isCheckValid;

    setLockButton(!isFormValid);
    setNameError(firstName ? !isFirstNameValid : false);
    setLastNameError(lastName ? !isLastNameValid : false);
    setEmailError(email ? !isEmailValid : false);
    setPasswordError(password ? !isPasswordValid : false);
    setConfirmPasswordError(confirmPassword ? !isConfirmPasswordValid : false);
    setCpfError(cpf ? !isCpfValid : false);
    setBirthyDayError(birthyDay ? !isBirthDayValid : false);
    setPhoneError(phone ? !isPhoneValid : false);
    // setGenderError(gender ? !isGenderValid : false);
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    cpf,
    birthyDay,
    phone,
    // gender,
    checkButton,
  ]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Registrar Usuário
                  </MDTypography>
                  <MDBox pt={1} pb={2} px={1} lineHeight={1.25}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Contato
                    </MDTypography>
                    <MDBox
                      display="flex"
                      alignItems="center"
                      py={2}
                      pb={2}
                      sx={{
                        display: "grid",
                        gap: 2,
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <MDInput
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type="text"
                        label="Nome"
                        variant="outlined"
                        fullWidth
                      />
                      <MDInput
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text"
                        label="Sobrenome"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="phone"
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Senha
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" py={2} pb={2}>
                      <MDInput
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        label="Senha"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        type="password"
                        label="Confirmar senha"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                <Grid item xs={12} md={12} xl={12}>
                  <MDBox p={2}>
                    <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                      Registrar Biblioteca
                    </MDTypography>
                    <MDBox pt={1} pb={2} px={1} lineHeight={1.25}>
                      <MDTypography
                        variant="caption"
                        fontWeight="bold"
                        color="text"
                        textTransform="uppercase"
                      >
                        Dados do aluno
                      </MDTypography>
                      <MDBox display="flex" alignItems="center" py={2} pb={2}>
                        <MDInput
                          onChange={(e) => setLibId(e.target.value)}
                          value={libId}
                          type="text"
                          label="Instituição"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={2}>
                        <MDInput
                          onChange={(e) => setCpf(e.target.value)}
                          value={cpf}
                          type="number"
                          label="CPF"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={2}>
                        <MDInput
                          onChange={(e) => setRmRa(e.target.value)}
                          value={rmRa}
                          type="number"
                          label="RM/RA"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox
                        onChange={(e) => setCoursesId(e.target.value)}
                        value={coursesId}
                        display="flex"
                        alignItems="center"
                        pb={2}
                      >
                        <MDInput type="text" label="Curso" variant="outlined" fullWidth />
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={2}>
                        <MDInput
                          onChange={(e) => setBirthyDay(e.target.value)}
                          value={birthyDay}
                          type="date"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </Grid>
                <Divider orientation="vertical" sx={{ mx: 0 }} />
              </Grid>
              <Grid item xs={12} xl={4}>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Definir Permissões
                  </MDTypography>
                  <MDBox pt={1} pb={2} px={1} lineHeight={1.25}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Permissões
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" py={2} pb={2}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="permission-label">Definir Autorização</InputLabel>
                        <Select
                          labelId="permission-label"
                          id="permission"
                          label="Permissões"
                          style={{ height: "44.13px" }}
                        >
                          <MenuItem value="">Selecione</MenuItem>
                          <MenuItem value="SUPPORT">Suporte</MenuItem>
                          <MenuItem value="USER">Usuário</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                    <MDBox>
                      <MDButton
                        href="#"
                        disabled={lockButton}
                        type="submit"
                        variant="gradient"
                        color="info"
                        fullWidth
                      >
                        Continuar
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
