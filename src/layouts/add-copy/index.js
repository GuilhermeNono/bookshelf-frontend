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
import { Autocomplete, TextField } from "@mui/material";
import { useLibrary } from "hooks/useLibrary";
import { useEffect, useState } from "react";
import { useMaterialUIController } from "context";
import capePlaceholder from "assets/images/capePlaceholder.png";
import Header from "./Header";

function AddCopy() {
  const [controller] = useMaterialUIController();
  const [selectedBook, setSelectedBook] = useState(null);
  const { token, library } = controller;
  const [books, setBooks] = useState([]);
  const useLibraries = useLibrary();

  useEffect(() => {
    if (token) {
      useLibraries.getLibraryBooks(token, library).then((resp) => {
        if (resp) {
          setBooks(resp);
        }
      });
    }
  }, [token, library]);

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
                    Adicionar Cópia
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
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={books}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => <TextField {...params} label="Título" />}
                        value={selectedBook}
                        onChange={(event, value) => setSelectedBook(value)}
                      />

                      <MDInput
                        type="text"
                        label="Autores"
                        variant="outlined"
                        value={
                          selectedBook?.authors
                            .map((author) => `${author.firstName} ${author.lastName}`)
                            .join(", ") || ""
                        }
                      />
                      <MDInput
                        type="text"
                        label="Categorias"
                        variant="outlined"
                        value={selectedBook?.categories.join(", ") || ""}
                      />
                      <TextField
                        type="text"
                        label="Sinopse"
                        variant="outlined"
                        multiline
                        rows={10}
                        maxRows={10}
                        value={selectedBook?.sinopse || ""}
                      />
                    </MDBox>
                    <MDBox
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: "repeat(5, 1fr)",
                        gap: 2,
                      }}
                    >
                      <MDInput
                        type="text"
                        label="Publisher"
                        variant="outlined"
                        value={selectedBook?.publisher || ""}
                        sx={{ gridColumn: 1, gridRow: 1 }}
                      />
                      <MDInput
                        type="text"
                        label="Edição"
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={selectedBook?.edition || ""}
                        sx={{ gridColumn: 1, gridRow: 2 }}
                      />
                      <MDInput
                        type="text"
                        label="Tipo de Capa"
                        variant="outlined"
                        value={selectedBook?.capeType || ""}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ gridColumn: 1, gridRow: 3 }}
                      />
                      <MDInput
                        type="text"
                        label="Data de Publicação"
                        value={
                          selectedBook?.publicationDate
                            .substring(0, 10)
                            .split("-")
                            .reverse()
                            .join("/") || ""
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        sx={{ gridColumn: 2, gridRow: 1 }}
                      />
                      <MDInput
                        type="text"
                        label="ISBN"
                        readOnly
                        value={selectedBook?.isbn || ""}
                        variant="outlined"
                        sx={{ gridColumn: 2, gridRow: 2 }}
                      />
                      <MDInput
                        type="url"
                        label="Url capa"
                        variant="outlined"
                        placeholder="Insira a url aqui"
                        value={selectedBook?.cape}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ gridColumn: 2, gridRow: 3 }}
                      />
                    </MDBox>
                    <MDBox
                      component="img"
                      sx={{
                        width: "400px",
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "100%",
                        borderRadius: "0.7rem",
                      }}
                      src={selectedBook?.cape || capePlaceholder}
                      alt="cape"
                    />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton type="submit" variant="gradient" color="success">
                      Adicionar
                    </MDButton>
                    <MDInput
                      type="text"
                      label="Tombo"
                      variant="outlined"
                      placeholder="Insira o codigo do tombo aqui"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
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

export default AddCopy;
