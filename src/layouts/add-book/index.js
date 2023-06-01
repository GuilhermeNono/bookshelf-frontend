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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "./Header";

function AddBook() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Header />
              <MDBox ml={3}>
                <MDBox ml={3}>
                  <MDTypography variant="h2" fontWeight="medium" color="info" mt={4}>
                    Adicionar Livro
                  </MDTypography>
                  <MDTypography display="block" variant="button" my={1}>
                    Informe os dados do livro que deseja adicionar a sua biblioteca abaixo:
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form" />
                  <MDBox
                    sx={{
                      display: "grid",
                      gap: 2,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <MDBox
                      sx={{
                        display: "grid",
                        gap: 2,
                      }}
                    >
                      <MDInput type="text" label="Título" variant="outlined" />
                      <MDInput type="text" label="Autores" variant="outlined" />
                      <MDInput type="text" label="Categorias" variant="outlined" />
                      {/* <MDInput
                        type="text"
                        label="Sinopse"
                        variant="outlined"
                        placeholder="Insira a descrição do livro aqui"
                        multiline
                        rows={4}
                        maxRows={6}
                      /> */}
                    </MDBox>
                    <MDBox
                      sx={{
                        display: "grid",
                        gap: 2,
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <MDInput type="text" label="Publisher" variant="outlined" />
                      <MDInput
                        type="date"
                        label="Data de Publicação"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                      />
                      <MDInput type="text" label="Edição" variant="outlined" />
                      <MDInput type="number" label="ISBN" variant="outlined" />
                      <MDInput
                        type="url"
                        label="Url capa"
                        variant="outlined"
                        placeholder="Insira a url aqui"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </MDBox>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton type="submit" variant="gradient" color="success">
                      Adicionar
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddBook;
