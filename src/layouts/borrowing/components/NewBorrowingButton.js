/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useMaterialUIController } from "context";
import { useLoan } from "hooks/useLoan";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { useLibrary } from "hooks/useLibrary";
import capePlaceholder from "assets/images/capePlaceholder.png";
import MDAlert from "components/MDAlert";
import MDTypography from "components/MDTypography";

function NewBorrowingButton() {
  const theme = useTheme();
  const [controller] = useMaterialUIController();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const onlyXs = useMediaQuery(theme.breakpoints.only("xs"));
  const { createBorrowing } = useLoan();
  const { getAllUsers } = useLibrary();

  const { userLogged } = controller;

  const [openDialog, setOpenDialog] = useState(false);

  const [loanData, setLoanData] = useState({
    loanDate: new Date().toLocaleDateString(), // Definindo a data atual como valor inicial
    returnDate: "",
    bookCode: "",
    userId: "",
  });
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleErrorSnackbar = () => {
    setErrorSnackbar(true);
  };

  const handleCloseErrorSnackbar = () => {
    setErrorSnackbar(false);
  };

  const handleSuccessSnackbar = () => {
    setSuccessSnackbar(true);
  };

  const handleCloseSuccessSnackbar = () => {
    setSuccessSnackbar(false);
  };

  const borrowingData = {
    loanDate: loanData.loanDate,
    returnDate: loanData.returnDate,
    bookCode: loanData.bookCode,
    userId: loanData.userId,
  };

  const validateFields = () => {
    // Verifica se todos os campos estão preenchidos
    if (!loanData.loanDate || !loanData.returnDate || !loanData.bookCode || !loanData.userId) {
      handleErrorSnackbar();
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const isValid = validateFields();

    if (isValid) {
      createBorrowing(userLogged.token, borrowingData)
        .then(() => {
          handleCloseDialog();
          handleSuccessSnackbar();
        })
        .catch((error) => {
          console.log("Error creating borrowing:", error);
        });
    }
  };
  console.log(selectedUser && selectedUser.getEmail());

  useEffect(() => {
    if (userLogged) {
      getAllUsers(userLogged.token).then((resp) => {
        if (resp) {
          setUsers(resp);
        }
      });
    }
  }, [userLogged]);

  return (
    <MDBox>
      <MDButton onClick={handleOpenDialog} color="success">
        Novo Empréstimo
      </MDButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            backgroundColor: "#202940",
            boxShadow: "none",
            maxWidth: "1189.42px",
          },
        }}
      >
        <DialogTitle sx={{ mb: 1 }}>Novo Empréstimo</DialogTitle>
        <DialogTitle sx={{ mb: 1 }}>Nome do Livro</DialogTitle>
        <DialogContent>
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
                sx={{ display: "flex", justifyContent: "center", mb: 2 }}
              >
                <MDBox
                  component="img"
                  sx={{
                    width: "auto",
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "488px",
                    borderRadius: "0.7rem",
                  }}
                  src={capePlaceholder}
                  alt="cape"
                />
              </Grid>
              <Grid xs={12} sm={12} md={6.2} lg={7.4} sx={upMd && { ml: 2, mb: 2 }}>
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
                            gap: 2,
                          }
                    }
                  >
                    <Box gridRow={1} sx={onlyXs && { mb: 3 }}>
                      <MDInput
                        label="Tombo"
                        type="number"
                        value={loanData.bookCode}
                        onChange={(e) => setLoanData({ ...loanData, bookCode: e.target.value })}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Box>
                    <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                      <MDTypography>Editora: </MDTypography>
                    </Box>

                    <Box gridRow={3} sx={onlyXs && { mb: 3 }}>
                      <MDTypography>ISBN: </MDTypography>
                    </Box>
                    <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                      <MDTypography>Edição: </MDTypography>
                    </Box>
                    <Box gridRow={5} sx={onlyXs && { mb: 3 }}>
                      <MDTypography>Data de Publicação: </MDTypography>
                    </Box>
                    <Box gridRow={6} sx={onlyXs && { mb: 3 }}>
                      <MDTypography>Linguagem: </MDTypography>
                    </Box>
                    <Box gridRow={1} sx={onlyXs && { mb: 3 }}>
                      <Autocomplete
                        renderInput={(params) => <TextField {...params} label="Curso" />}
                      />
                    </Box>
                    <Box gridRow={2} sx={onlyXs && { mb: 3 }}>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={users}
                        getOptionLabel={(option) => option.account.personName}
                        renderInput={(params) => <TextField {...params} label="Usuário" />}
                        value={selectedUser}
                        onChange={(event, value) => setSelectedUser(value)}
                      />
                    </Box>
                    <Box
                      gridRow={3}
                      sx={
                        onlyXs && {
                          display: "flex",
                          flexDirection: "row",
                          mr: "5",
                          mb: "15px",
                          alignItems: "flex-end",
                        }
                      }
                    >
                      <MDTypography variant="h5" sx={{ mr: "8px", fontSize: "1em" }}>
                        RM/RA:
                      </MDTypography>

                      <MDTypography
                        variant="h6"
                        sx={{ color: "#cecece", fontWeight: "400", fontSize: "1em" }}
                      >
                        {selectedUser ? selectedUser.rmRa : ""}
                      </MDTypography>
                    </Box>
                    <Box gridRow={4} sx={onlyXs && { mb: 3 }}>
                      <MDTypography variant="h5" sx={{ mr: "8px", fontSize: "1em" }}>
                        Contato:
                      </MDTypography>
                      <MDTypography
                        variant="h6"
                        sx={{ color: "#cecece", fontWeight: "400", fontSize: "1em" }}
                      >
                        {selectedUser ? selectedUser.getEmail() : ""}
                      </MDTypography>
                    </Box>
                    <Box gridRow={5} sx={onlyXs && { mb: 3 }} />
                    <Box gridRow={6} sx={onlyXs && { mb: 3 }} />
                  </MDBox>
                </Grid>
              </Grid>
            </Grid>
          </MDBox>
        </DialogContent>

        <DialogActions>
          <MDButton onClick={handleCloseDialog} color="error" variant="contained">
            Cancelar
          </MDButton>
          <MDButton onClick={handleSubmit} color="info" background="none">
            Criar Empréstimo
          </MDButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseErrorSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert onClose={handleCloseErrorSnackbar} severity="error">
          Por favor, preencha todos os campos para realizar o empréstimo.
        </Alert>
      </Snackbar>

      <Snackbar
        open={successSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSuccessSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
      >
        <Alert onClose={handleCloseSuccessSnackbar} severity="success">
          Empréstimo criado com sucesso!
        </Alert>
      </Snackbar>
    </MDBox>
  );
}

export default NewBorrowingButton;
