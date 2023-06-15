import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import capePlaceholder from "assets/images/capePlaceholder.png";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useBooks } from "hooks/useBooks";
import Header from "./Header";

function AddBook() {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const onlyXs = useMediaQuery(theme.breakpoints.only("xs"));
  const onlySm = useMediaQuery(theme.breakpoints.only("sm"));
  const { addNewBook, loading } = useBooks();

  // use states
  const [bookTitle, setBookTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [edition, setEdition] = useState("");
  const [capeType, setCapeType] = useState("");
  const [numberPages, setNumberPages] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [authors, setAuthors] = useState([{ firstName: "", lastName: "", avatar: "" }]);

  const handleAddBook = () => {
    const bookData = {
      name: bookTitle,
      language,
      publicationDate,
      isbn,
      sinopse: synopsis,
      edition,
      capeType,
      numberPages,
      cape: imageUrl,
      publisher: {
        name: publisherName,
      },
      categories: {
        name: categoryName,
      },
      authors,
    };

    addNewBook(bookData)
      .then((response) => {
        // Handle success response
        console.log("Book added successfully", response);
      })
      .catch((error) => {
        // Handle error response
        console.error("Failed to add book", error);
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
                  Adicionar Livro
                </MDTypography>
                <MDTypography display="block" variant="button" my={1}>
                  Informe os dados do livro que deseja adicionar a sua biblioteca abaixo:
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
                      src={imageUrl || capePlaceholder}
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
                        <MDInput
                          type="text"
                          label="Título"
                          variant="outlined"
                          fullWidth
                          value={bookTitle}
                          onChange={(e) => setBookTitle(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Autores"
                          variant="outlined"
                          fullWidth
                          value={authors}
                          onChange={(e) => setAuthors(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Categorias"
                          variant="outlined"
                          fullWidth
                          value={categoryName}
                          onChange={(e) => setCategoryName(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="URL da capa"
                          variant="outlined"
                          fullWidth
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={5} sx={onlyXs && { mb: 3 }}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="language-select-label">Idioma</InputLabel>
                          <Select
                            labelId="language-select-label"
                            id="language-select"
                            label="Idioma"
                            value={language}
                            style={{ height: "44.13px" }}
                            onChange={(e) => setLanguage(e.target.value)}
                          >
                            <MenuItem value="">Selecione</MenuItem>
                            <MenuItem value="Português">Português</MenuItem>
                            <MenuItem value="Inglês">Inglês</MenuItem>
                          </Select>
                        </FormControl>
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
                          value={synopsis}
                          onChange={(e) => setSynopsis(e.target.value)}
                        />
                      </Box>

                      <Box gridRow={1} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="date"
                          label="Data de Publicação"
                          value={publicationDate}
                          onChange={(e) => setPublicationDate(e.target.value)}
                          variant="outlined"
                          fullWidth
                        />
                      </Box>
                      <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="ISBN"
                          variant="outlined"
                          fullWidth
                          value={isbn}
                          onChange={(e) => setIsbn(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="capeType-label">Tipo de Capa</InputLabel>
                          <Select
                            labelId="capeType-label"
                            id="capeType"
                            value={capeType}
                            onChange={(e) => setCapeType(e.target.value)}
                            label="Tipo de Capa"
                            style={{ height: "44.13px" }}
                          >
                            <MenuItem value="">Selecione</MenuItem>
                            <MenuItem value="Dura">Dura</MenuItem>
                            <MenuItem value="Comum">Comum</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                      <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Publisher"
                          variant="outlined"
                          fullWidth
                          value={publisherName}
                          onChange={(e) => setPublisherName(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={5} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Edição"
                          variant="outlined"
                          fullWidth
                          value={edition}
                          onChange={(e) => setEdition(e.target.value)}
                        />
                      </Box>
                      <Box gridRow={6} sx={onlyXs && { mb: 3 }}>
                        <MDInput
                          type="text"
                          label="Páginas"
                          variant="outlined"
                          fullWidth
                          value={numberPages}
                          onChange={(e) => setNumberPages(e.target.value)}
                        />
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
                        onClick={handleAddBook}
                        disabled={loading}
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

export default AddBook;
