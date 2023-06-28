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

import { useUsers } from "hooks/useUsers";
import { useMaterialUIController } from "context";
import useCourse from "hooks/useCourse";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";

function Overview() {
  const [cpf, setCpf] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [rmRa, setRmRa] = useState("");
  const [coursesId, setCoursesId] = useState(2);
  const [gender, setGender] = useState("");
  const [birthyDay, setBirthyDay] = useState("");
  const [permission, setPermission] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const [selectedCourse, setSelectedCourse] = useState();
  const [courses, setCourses] = useState();

  const registerUser = useUsers();
  const [controller] = useMaterialUIController();
  const { userLogged, library } = controller;
  const { getLibaryCourses } = useCourse();

  const validateFields = () => {
    if (
      !cpf ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !rmRa ||
      !coursesId ||
      !gender ||
      !birthyDay ||
      !permission
    ) {
      return false;
    }
    return true;
  };

  const registerData = {
    id: 14,
    rmRa,
    profilePicture,
    libProfileId: permission,
    libId: 1,
    coursesId,
  };

  useEffect(() => {
    if (userLogged) {
      getLibaryCourses(userLogged.token, library).then((resp) => {
        setCourses(resp);
      });
    }
  }, [userLogged]);

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

    if (!isValid) {
      console.log("Botão funcionou e os campos são validos");
      registerUser
        .createUserDashboard(userLogged.token, registerData)
        .then(() => {
          // Limpa os campos após o sucesso
          setCpf("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setProfilePicture("");
          setRmRa("");
          setCoursesId();
          setGender("");
          setBirthyDay("");
          setPermission("");

          console.log("passou aqui");
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
                        onChange={(e, value) => setSelectedUser(value)}
                      />
                    </MDBox>
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
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={courses}
                          getOptionLabel={(option) =>
                            `${option.module}° ${option.name} - ${option.classroom}`
                          }
                          renderInput={(params) => <TextField {...params} label="Curso" />}
                          value={selectedCourse}
                          onChange={(event, value) => setSelectedCourse(value)}
                          fullWidth
                        />
                      </MDBox>
                      {console.log(selectedUser)}
                      <MDBox display="flex" alignItems="center" pb={2}>
                        <MDInput
                          onChange={(e) => setGender(e.target.value)}
                          value={selectedUser?.gender ? selectedUser.gender : gender}
                          readOnly={Boolean(selectedUser?.gender)}
                          type="email"
                          label="Genêro"
                          variant="outlined"
                          fullWidth
                        />
                      </MDBox>
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
                          label="Data de Nascimento"
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
                          value={permission}
                          labelId="permission-label"
                          id="permission"
                          label="Permissões"
                          style={{ height: "44.13px" }}
                          onChange={(event) => setPermission(event.target.value)}
                        >
                          <MenuItem value="">Selecione</MenuItem>
                          <MenuItem value={3}>Suporte</MenuItem>
                          <MenuItem value={2}>Usuário</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                    {console.log(permission)}
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
