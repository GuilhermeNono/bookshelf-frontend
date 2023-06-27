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

import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import {
  Alert,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Slide,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DataTable from "examples/Tables/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDButton from "components/MDButton";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Footer from "../../examples/Footer";
import data from "./data";
import { useLibrary } from "../../hooks/useLibrary";
import { setCurrentBook, useMaterialUIController } from "../../context";

function Details() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  // eslint-disable-next-line no-unused-vars
  const [bookInfo, setBookInfo] = useState(null);
  const { columns, rows } = data();
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const useLibraries = useLibrary();
  const { libId } = useParams();
  const [controller, dispatch] = useMaterialUIController();
  const { userLogged, library } = controller;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (userLogged) {
      useLibraries
        .getLibraryBooks(userLogged.token, library, [
          { filterKey: "code", operation: "eq", value: libId },
        ])
        .then((response) => {
          setBook(response[0]);
          setCurrentBook(dispatch, response[0]);
        });
    }
  }, [userLogged]);

  const handleRemoveCopy = () => {
    if (userLogged && book) {
      useLibraries
        .deleteCopy(userLogged.token, book.code)
        .then(() => {
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
            navigate("/dashboard/books");
          }, 3000);
        })
        .catch(() => {});
    }
  };

  const handleDeleteConfirm = () => {
    handleRemoveCopy();
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="success" sx={{ zIndex: 9999 }}>
          Cópia removida com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSuccessAlert}
        sx={{ mt: 8 }}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert severity="success" sx={{ zIndex: 9999 }}>
          Movendo a página...
        </Alert>
      </Snackbar>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <MDTypography variant="h6" color="white">
                      Detalhes do Livro
                    </MDTypography>
                  </Grid>
                  <Grid item>
                    <MDButton onClick={() => setShowDeleteDialog(true)} color="error">
                      Remover Cópia
                    </MDButton>

                    <Dialog
                      open={showDeleteDialog}
                      onClose={handleDeleteCancel}
                      PaperProps={{
                        style: {
                          backgroundColor: "#202940",
                          boxShadow: "none",
                          maxWidth: "350px",
                          height: "auto",
                        },
                      }}
                    >
                      <DialogTitle>Tem certeza que deseja excluir essa cópia?</DialogTitle>
                      <DialogActions>
                        <MDButton onClick={handleDeleteCancel} color="info">
                          Cancelar
                        </MDButton>
                        <MDButton onClick={handleDeleteConfirm} color="error">
                          Excluir
                        </MDButton>
                      </DialogActions>
                    </Dialog>
                  </Grid>
                </Grid>
              </MDBox>
              {book ? (
                <MDBox sx={{ margin: "3rem 1.5rem 1rem 3rem" }}>
                  <Grid
                    sx={
                      matches && {
                        display: "flex",
                        justifyContent: "center",
                      }
                    }
                    container
                    spacing={3}
                  >
                    <Grid xs={12} sm={9} md={5} lg={4}>
                      <MDBox
                        component="img"
                        sx={{
                          width: "400px",
                          maxWidth: "100%",
                          height: "auto",
                          maxHeight: "100%",
                          borderRadius: "0.7rem",
                        }}
                        src={book.cape}
                        alt="cape"
                      />
                    </Grid>
                    <Grid xs={10.5} sm={6.6} lg={7.5} sx={{ ml: 2 }}>
                      <MDTypography variant="h3" align="center" sx={{ fontWeight: "400" }}>
                        {book.name}
                      </MDTypography>
                      <Grid container>
                        <Avatar
                          src={book.authors[0].avatar}
                          alt="J.k.Rowling"
                          sx={{ width: "6rem", height: "6rem", mr: "20px", mb: "15px" }}
                        />
                        <MDBox
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            mb: "15px",
                          }}
                        >
                          <MDTypography variant="h5">{book.authors[0].completeName}</MDTypography>
                          <MDTypography variant="h6" sx={{ color: "#cecece", fontWeight: "400" }}>
                            Autor(a)
                          </MDTypography>
                        </MDBox>
                      </Grid>
                      <Grid sx={{ textAlign: "justify" }}>
                        <MDTypography
                          variant="item"
                          sx={{
                            fontSize: "0.7em",
                            fontWeight: "400",
                            color: "#cecece",
                          }}
                        >
                          {book.sinopse}
                        </MDTypography>
                      </Grid>
                      <Grid
                        mt={5}
                        sx={
                          matches
                            ? { display: "block" }
                            : {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridTemplateRows: "repeat(6, 1fr)",
                              }
                        }
                      >
                        <Box
                          gridRow={1}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Editora:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.publisher}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={2}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            ISBN:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.isbn}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={3}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Edição:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.edition}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={4}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Data de Publicação:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.publicationDate.substring(0, 10).split("-").reverse().join("/")}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={5}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Paginas:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.numberPages}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={6}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Linguagem:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.language}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={1}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Capa:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.typeCape}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={2}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Tombo:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.code}
                          </MDTypography>
                        </Box>
                        <Box
                          gridRow={3}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mr: "5",
                            mb: "15px",
                            alignItems: "flex-end",
                          }}
                        >
                          <MDTypography variant="h6" sx={{ mr: "8px", fontSize: "0.74em" }}>
                            Copias:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            09
                          </MDTypography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} lg={2}>
                    <MDBox
                      mt={3}
                      py={2}
                      px={2}
                      textAlign="center"
                      variant="gradient"
                      bgColor="info"
                      borderRadius="lg"
                      coloredShadow="info"
                    >
                      <MDTypography variant="h6" color="white">
                        Emprestimos
                      </MDTypography>
                    </MDBox>
                  </Grid>
                  <Grid>
                    <MDBox pt={3}>
                      <DataTable
                        table={{ columns, rows }}
                        isSorted={false}
                        entriesPerPage={false}
                        showTotalEntries={false}
                        noEndBorder
                      />
                    </MDBox>
                  </Grid>
                </MDBox>
              ) : (
                <MDBox>
                  <CircularProgress
                    sx={{
                      display: "flex",
                      margin: "0 auto",
                      alignContent: "center",
                    }}
                    color="inherit"
                  />
                </MDBox>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Details;
