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
import MDInput from "../../components/MDInput";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
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
                  <MDBox display="flex" alignItems="center" py={2} pb={2}>
                    <MDInput type="text" label="Nome" variant="outlined" fullWidth />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" pb={2}>
                    <MDInput type="email" label="Email" variant="outlined" fullWidth />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" pb={2}>
                    <MDInput type="phone" label="Telefone" variant="outlined" fullWidth />
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
                    <MDInput type="password" label="Senha" variant="outlined" fullWidth />
                  </MDBox>
                  {/* Confirmar senha só vai aparecer quando tudo for preenchido */}
                  <MDBox display="flex" alignItems="center" pb={2}>
                    <MDInput type="password" label="Confirmar senha" variant="outlined" fullWidth />
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
                      <MDInput type="text" label="Instituição" variant="outlined" fullWidth />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput type="text" label="CPF" variant="outlined" fullWidth />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput type="text" label="RM/RA" variant="outlined" fullWidth />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput type="text" label="Curso" variant="outlined" fullWidth />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pb={2}>
                      <MDInput
                        type="text"
                        label="Data de nascimento"
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
                        <MenuItem value="SUPPORT">Funcionário</MenuItem>
                        <MenuItem value="USER">Usuário</MenuItem>
                      </Select>
                    </FormControl>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
