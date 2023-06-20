/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Slide from "@mui/material/Slide";
import {
  Alert,
  Autocomplete,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
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
import { useMaterialUIController } from "context";
import Header from "./components/Header";

function AddBook() {
  const theme = useTheme();
  const [controller] = useMaterialUIController();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const onlyXs = useMediaQuery(theme.breakpoints.only("xs"));

  const { addNewBook, loading, getAllCategories, getAllAuthors } = useBooks();

  const { token } = controller;

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
  const [categories, setCategories] = useState([{ name: "" }]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const isOptionEqualToValue = (option, value) => option.name === value.name;
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState({ firstName: "", lastName: "", avatar: "" });
  const [allAuthors, setAllAuthors] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isAddAuthorPopupOpen, setAddAuthorPopupOpen] = useState(false);

  // TODO - Mudar a cor do popup(dialog)

  // Tratar erros
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  // Validar campos
  const validateFields = () => {
    // Verifica se todos os campos estão preenchidos
    if (
      !bookTitle ||
      !language ||
      !publicationDate ||
      !isbn ||
      !synopsis ||
      !edition ||
      !capeType ||
      !numberPages ||
      !imageUrl ||
      !publisherName ||
      selectedCategories.length === 0 ||
      authors.length === 0
    ) {
      return false;
    }

    // Outras validações específicas podem ser adicionadas aqui

    return true;
  };

  useEffect(() => {
    getAllCategories(token).then((resp) => {
      if (resp) {
        setCategories(resp);
      }
    });
    getAllAuthors(token).then((resp) => {
      if (resp) {
        setAllAuthors(resp);
        setAuthors([]);
      }
    });
  }, []);

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
    categories: selectedCategories.map((category) => ({
      name: category.name,
    })),
    authors: authors.map((author) => ({
      firstName: author.firstName,
      lastName: author.lastName,
      avatar: author.avatar,
    })),
  };

  const handleAddBook = () => {
    const isValid = validateFields();

    if (isValid) {
      addNewBook(token, bookData)
        .then(() => {
          // Limpa os campos após o sucesso
          setBookTitle("");
          setLanguage("");
          setPublicationDate("");
          setIsbn("");
          setSynopsis("");
          setEdition("");
          setCapeType("");
          setNumberPages("");
          setImageUrl("");
          setPublisherName("");
          setCategories([{ name: "" }]);
          setSelectedCategories([]);
          setAuthors([]);

          // Exibe o alerta de sucesso
          setShowSuccessAlert(true);
        })
        .catch(() => {
          // Handle error response
        });
    } else {
      setShowErrorAlert(true);
    }
  };

  const handleAuthorDelete = (author) => {
    const newAuthors = authors.filter((a) => a !== author);
    setAuthors(newAuthors);
  };

  const renderTags = (value, getTagProps) =>
    value.map((author, index) => (
      <MDButton
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        variant="contained"
        color="info"
        size="small"
        style={{ marginRight: "8px", marginBottom: "8px" }}
        {...getTagProps({ index })}
        onClick={() => handleAuthorDelete(author)}
      >
        {`${author.firstName} ${author.lastName}`}
      </MDButton>
    ));

  const handleOpenAddAuthorPopup = () => {
    setAddAuthorPopupOpen(true);
  };

  const handleCloseAddAuthorPopup = () => {
    setAddAuthorPopupOpen(false);
  };

  const handleNewAuthorChange = (event, value) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: value || event.target.value,
    });
  };

  const handleNewAuthorAddition = () => {
    if (newAuthor.firstName && newAuthor.lastName) {
      const updatedAllAuthors = [...allAuthors, newAuthor];
      setAllAuthors(updatedAllAuthors);
      setAuthors([...authors, newAuthor]);
      setNewAuthor({ firstName: "", lastName: "", avatar: "" });

      // Fechar o popup de adição de autor
      setAddAuthorPopupOpen(false);
    }
  };

  const handleCloseAlert = () => {
    setShowSuccessAlert(false);
  };

  return (
    <DashboardLayout>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="success" sx={{ zIndex: 9999 }}>
          Livro adicionado com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
        onClose={() => setShowErrorAlert(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="error" sx={{ zIndex: 9999 }}>
          Por favor, preencha todos os campos corretamente.
        </Alert>
      </Snackbar>

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
                    <Grid>
                      <MDBox
                        sx={
                          downSm
                            ? {
                                display: "block",
                              }
                            : {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridTemplateRows: "auto auto",
                                gap: 3,
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
                          <Autocomplete
                            multiple
                            limitTags={2}
                            id="authors"
                            options={allAuthors}
                            getOptionLabel={(author) => `${author.firstName} ${author.lastName}`}
                            value={authors}
                            onChange={(event, value) => setAuthors(value)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Autores"
                                variant="outlined"
                                placeholder="Adicionar autor"
                              />
                            )}
                            renderTags={renderTags}
                          />
                          <MDBox mt={2}>
                            <MDButton
                              variant="contained"
                              color="primary"
                              onClick={handleOpenAddAuthorPopup}
                            >
                              Adicionar Autor
                            </MDButton>
                            {/* Popup de adição de autor */}
                            <Dialog
                              open={isAddAuthorPopupOpen}
                              onClose={handleCloseAddAuthorPopup}
                              PaperProps={{
                                style: {
                                  backgroundColor: "#202940",
                                  boxShadow: "none",
                                },
                              }}
                            >
                              <DialogTitle>Novo Autor</DialogTitle>
                              <DialogContent>
                                <TextField
                                  label="Nome"
                                  name="firstName"
                                  value={newAuthor.firstName}
                                  onChange={handleNewAuthorChange}
                                  variant="outlined"
                                  fullWidth
                                />
                                <TextField
                                  sx={{ mt: 2 }}
                                  label="Sobrenome"
                                  name="lastName"
                                  value={newAuthor.lastName}
                                  onChange={handleNewAuthorChange}
                                  variant="outlined"
                                  fullWidth
                                />
                                <TextField
                                  sx={{ mt: 2 }}
                                  label="Avatar"
                                  name="avatar"
                                  value={newAuthor.avatar}
                                  onChange={handleNewAuthorChange}
                                  variant="outlined"
                                  fullWidth
                                />
                                <MDButton
                                  sx={{ mt: 2 }}
                                  variant="contained"
                                  color="info"
                                  onClick={handleNewAuthorAddition}
                                  disabled={
                                    !newAuthor.firstName || !newAuthor.lastName || !newAuthor.avatar
                                  }
                                >
                                  Adicionar Autor
                                </MDButton>
                              </DialogContent>
                            </Dialog>
                          </MDBox>
                        </Box>
                        <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                          <Autocomplete
                            multiple
                            options={categories}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" label="Categorias" />
                            )}
                            value={selectedCategories}
                            onChange={(event, value) => setSelectedCategories(value)}
                            isOptionEqualToValue={isOptionEqualToValue}
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
                              <MenuItem value="Espanhol">Espanhol</MenuItem>
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
                            InputLabelProps={{
                              shrink: true,
                            }}
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
                          <FormControl fullWidth>
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
                              <MenuItem valuNPe="Dura">Dura</MenuItem>
                              <MenuItem value="Comum">Comum</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                          <MDInput
                            type="text"
                            label="Publisher"
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
                            type="number"
                            label="Páginas"
                            variant="outlined"
                            fullWidth
                            value={numberPages}
                            onChange={(e) => setNumberPages(e.target.value)}
                          />
                        </Box>
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
                      </MDBox>
                    </Grid>
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
