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
import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import { isValid, parseISO } from "date-fns";
import { useUsers } from "hooks/useUsers";
import { useMaterialUIController } from "context";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

function Overview() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthyDay, setBirthyDay] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCpf] = useState("");
  const [rmRa, setRmRa] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [coursesId, setCoursesId] = useState([]);

  // errors
  // const [firstNameError, setNameError] = useState(false);
  // const [lastNameError, setLastNameError] = useState(false);
  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  // const [birthyDayError, setBirthyDayError] = useState(false);
  // const [phoneError, setPhoneError] = useState(false);
  // const [genderError, setGenderError] = useState(false);
  // const [cpfError, setCpfError] = useState(false);
  // const [rmRaError, setRmRaError] = useState(false);
  // const [coursesIdError, setCoursesIdError] = useState(false);
  // const [lockButton, setLockButton] = useState(true);

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const registerUser = useUsers();
  const [controller] = useMaterialUIController();
  const { userLogged, library } = controller;

  const validateFields = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !birthyDay ||
      !phone ||
      !gender ||
      !cpf ||
      !rmRa ||
      !coursesId
    ) {
      return false;
    }
    return true;
  };

  const registerData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    birthyDay,
    phone,
    gender,
    cpf,
    rmRa,
    profilePicture,
    coursesId,
  };

  useEffect(() => {
    if (userLogged) {
      registerUser.getUsersNotResgistred(userLogged.token, library).then((resp) => {
        if (resp) {
          setUsers(resp);
        }
      });
    }
  }, [userLogged]);

  const handleRegisterUser = () => {
    const isValid = validateFields();

    if (isValid) {
      registerUser
        .createUserDashboard(userLogged.token, registerData)
        .then(() => {
          // Limpa os campos após o sucesso
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setBirthyDay("");
          setPhone("");
          setGender("");
          setCpf("");
          setRmRa("");
          setProfilePicture();
          setCoursesId([]);

          // Exibe o alerta de sucesso
        })
        .catch(() => {
          // Handle error response
        });
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <MDBox>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <MDBox p={2}>
                  <MDBox pt={1} pb={2} px={1} lineHeight={1.25}>
                    <MDTypography
                      variant="caption"
                      fontWeight="bold"
                      color="text"
                      textTransform="uppercase"
                    >
                      Indentificador
                    </MDTypography>
                    <MDBox py={2} pb={2}>
                      <Autocomplete
                        sx={{ fontSize: "30px" }}
                        disablePortal
                        id="combo-box-demo"
                        options={users}
                        getOptionLabel={(option) => option.cpf}
                        renderInput={(params) => <TextField {...params} label="CPF" />}
                        value={selectedUser}
                        onChange={(event, value) => setSelectedUser(value)}
                      />
                    </MDBox>
                    {console.log(selectedUser)}
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
                        value={selectedUser?.name ? selectedUser.name.split(" ")[0] : firstName}
                        readOnly={Boolean(selectedUser?.name)}
                        type="text"
                        label="Nome"
                        variant="outlined"
                        fullWidth
                      />
                      <MDInput
                        onChange={(e) => setLastName(e.target.value)}
                        value={selectedUser?.name ? selectedUser.name.split(" ")[1] : firstName}
                        readOnly={Boolean(selectedUser?.name)}
                        type="text"
                        label="Sobrenome"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setEmail(e.target.value)}
                        value={selectedUser?.getEmail() ? selectedUser.getEmail() : email}
                        readOnly={Boolean(selectedUser?.getEmail())}
                        type="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setPhone(e.target.value)}
                        value={selectedUser?.getPhone() ? selectedUser.getPhone() : phone}
                        readOnly={Boolean(selectedUser?.getPhone())}
                        type="phone"
                        label="Telefone"
                        variant="outlined"
                        fullWidth
                      />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        onChange={(e) => setProfilePicture(e.target.value)}
                        value={profilePicture}
                        type="text"
                        label="Foto do usuário"
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
                    <MDBox pt={1} pb={2} px={1} lineHeight={1.25}>
                      <MDTypography
                        variant="caption"
                        fontWeight="bold"
                        color="text"
                        textTransform="uppercase"
                      >
                        Dados do aluno
                      </MDTypography>
                      <MDBox display="flex" alignItems="center" pb={2} py={2}>
                        <MDInput
                          onChange={(e) => setRmRa(e.target.value)}
                          value={rmRa}
                          type="text"
                          label="RM/RA"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={2}>
                        <MDInput
                          onChange={(e) => setCoursesId(e.target.value)}
                          value={coursesId}
                          type="text"
                          label="Curso"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel id="gender-label">Sexo</InputLabel>
                        <Select
                          labelId="gender-label"
                          id="gender"
                          readOnly={Boolean(selectedUser?.personName)}
                          onChange={(e) => setGender(e.target.value)}
                          label="Sexo"
                          style={{ height: "44.13px" }}
                        >
                          <MenuItem value="">Selecione</MenuItem>
                          <MenuItem value="Male">Masculino</MenuItem>
                          <MenuItem value="Female">Feminino</MenuItem>
                        </Select>
                      </FormControl>
                      {console.log(selectedUser?.birthyDay)}
                      <MDBox display="flex" alignItems="center" pb={2} py={2}>
                        <MDInput
                          onChange={(e) =>
                            setBirthyDay(
                              e.target.value
                                .replace(/[^0-9]/g, "")
                                .replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, "$1/$2/$3")
                            )
                          }
                          value={selectedUser?.birthyDay ? selectedUser.birthyDay : birthyDay}
                          readOnly={Boolean(selectedUser?.birthyDay)}
                          type="text"
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
                        // error={passwordError}
                        // helperText={passwordError ? "A senha deve ter pelo menos 6 caracteres" : ""}
                        // FormHelperTextProps={{ style: { color: "red" } }}
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
                        // error={confirmPasswordError}
                        // helperText={confirmPasswordError ? "As senhas não conferem" : ""}
                        // FormHelperTextProps={{ style: { color: "red" } }}
                        fullWidth
                      />
                    </MDBox>
                    <MDBox>
                      <MDButton
                        // disabled={lockButton}
                        type="submit"
                        variant="gradient"
                        color="info"
                        onClick={handleRegisterUser}
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
