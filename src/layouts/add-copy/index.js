/* eslint-disable no-console */

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
import { Autocomplete, Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useLibrary } from "hooks/useLibrary";
import { useEffect, useState } from "react";
import { useMaterialUIController } from "context";
import capePlaceholder from "assets/images/capePlaceholder.png";
import { useAddBookCopy } from "hooks/useAddBookCopy";
// import { useNavigate } from "react-router-dom";
import Header from "./Header";

function AddCopy() {
  const [controller] = useMaterialUIController();
  const [selectedBook, setSelectedBook] = useState(null);
  const { token, library } = controller;
  // const navigate = useNavigate();
  const [tomboCode, setTomboCode] = useState([]);
  const [books, setBooks] = useState([]);
  const useLibraries = useLibrary();
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const onlyXs = useMediaQuery(theme.breakpoints.only("xs"));
  const onlySm = useMediaQuery(theme.breakpoints.only("sm"));

  const uidData = JSON.parse(localStorage.getItem("uid"));
  const { libraryId, userLibraryId } = uidData[0];
  const { addBookCopy, loading, error } = useAddBookCopy();
  // pegando as informações do localstorage
  // userLibraryId = userId, libraryId= libId

  // TODO: Endpoint para criar novas copias para uma biblioteca "/api/v1/library/book/add" para mais informações, basta olhar o Postman ou Swagger da API.
  useEffect(() => {
    if (token) {
      useLibraries.getLibraryBooks(token, library).then((resp) => {
        if (resp) {
          setBooks(resp);
        }
      });
    }
  }, [token, library]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se um livro foi selecionado
    if (!selectedBook) {
      console.log("Selecione um livro");
      return;
    }

    addBookCopy(token, selectedBook.id, libraryId, userLibraryId, tomboCode)
      .then(() => {
        // TODO resolver problema com bookId e erro 400
        // console.log para testar os campos
        console.log(
          `sucesso: bookId: ${selectedBook.bookId}, libray id: ${libraryId}, user id: ${userLibraryId} e tombo: ${tomboCode}`
        );

        console.log(selectedBook);

        // return navigate("/dashboard/books");
        // colocar um pop-up ou algo do tipo avisando foi um sucesso e depois redirecionar para a lista de livros
      })
      .catch(() => {
        // colocar um pop-up ou algo do tipo avisando que algo deu errado
        console.log(`Algo deu errado: ${error}`);
      });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Header />
              <MDBox ml={3}>
                <MDTypography variant="h2" fontWeight="medium" color="info" mt={4}>
                  Adicionar Cópia
                </MDTypography>
                <MDTypography display="block" variant="button" my={1}>
                  Informe os dados do livro que deseja adicionar uma cópia a sua biblioteca:
                </MDTypography>
              </MDBox>
              <MDBox sx={{ margin: "3rem 1.5rem 1rem 3rem" }}>
                <Grid
                  container
                  spacing={3}
                  sx={downSm && { display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={5}
                    lg={4}
                    sx={{ display: "flex", justifyContent: "center", mb: 5 }}
                  >
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
                  </Grid>
                  <Grid xs={12} sm={12} md={6.2} lg={7.4} sx={upMd && { ml: 5, mb: 5 }}>
                    <MDBox
                      sx={
                        downSm
                          ? {
                              display: "block",
                            }
                          : {
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gridTemplateRows: "repeat(5, 1fr)",
                              gap: 3,
                              height: "410px",
                            }
                      }
                    >
                      <Box gridRow={1} sx={onlyXs && { mb: 3 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={books}
                          getOptionLabel={(option) => option.bookId}
                          renderInput={(params) => <TextField {...params} label="Título" />}
                          value={selectedBook}
                          onChange={(event, value) => setSelectedBook(value)}
                        />
                      </Box>
                      <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Autores"
                          variant="outlined"
                          value={
                            selectedBook?.authors
                              .map((author) => `${author.firstName} ${author.lastName}`)
                              .join(", ") || ""
                          }
                          fullWidth
                          readOnly
                        />
                      </Box>
                      <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Categorias"
                          variant="outlined"
                          value={selectedBook?.categories.join(", ") || ""}
                          fullWidth
                          readOnly
                        />
                      </Box>
                      <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="url"
                          label="Url Imagem"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          fullWidth
                          readOnly
                        />
                      </Box>
                      <Box gridRow={5} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Linguagem"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.language || ""}
                        />
                      </Box>
                      <Box gridRow={6} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Sinopse"
                          variant="outlined"
                          placeholder="Insira a descrição do livro aqui"
                          multiline
                          rows={6}
                          fullWidth
                          readOnly
                          value={selectedBook?.sinopse || ""}
                        />
                      </Box>

                      <Box gridRow={1} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Data de Publicação"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                          value={
                            selectedBook?.publicationDate
                              .substring(0, 10)
                              .split("-")
                              .reverse()
                              .join("/") || ""
                          }
                          fullWidth
                          readOnly
                        />
                      </Box>
                      <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="ISBN"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.isbn || ""}
                        />
                      </Box>
                      <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Tipo de Capa"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.capeType || ""}
                        />
                      </Box>
                      <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Publisher"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.publisher || ""}
                        />
                      </Box>
                      <Box gridRow={5} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Edição"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.edition || ""}
                        />
                      </Box>
                      <Box gridRow={6} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Páginas"
                          variant="outlined"
                          fullWidth
                          readOnly
                          value={selectedBook?.numberPages || ""}
                        />
                        <Box sx={{ mt: 3 }}>
                          <MDInput
                            type="number"
                            value={tomboCode}
                            onChange={(e) => setTomboCode(e.target.value)}
                            label="Tombo"
                            variant="outlined"
                            placeholder="codigo do tombo"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Box>
                      </Box>
                    </MDBox>
                  </Grid>
                  <Grid container lg={12}>
                    <Box sx={onlySm && { mt: 3 }}>
                      <MDButton
                        type="submit"
                        variant="gradient"
                        color="info"
                        sx={onlyXs && { mb: 3 }}
                        disabled={loading}
                        onClick={handleSubmit}
                      >
                        {loading ? "Adicionando..." : "Adicionar"}
                      </MDButton>
                    </Box>
                  </Grid>
                </Grid>
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
