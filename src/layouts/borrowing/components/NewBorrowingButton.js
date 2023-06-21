import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { useMaterialUIController } from "context";
import { useLoan } from "hooks/useLoan";
import React, { useState } from "react";

function NewBorrowingButton() {
  const [controller] = useMaterialUIController();
  const { userLogged } = controller;
  const { useLoans } = useLoan();
  const [openDialog, setOpenDialog] = useState(false);
  const [loanData, setLoanData] = useState({
    loanDate: "",
    returnDate: "",
    bookCode: "",
    userId: "",
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = () => {
    const { loanDate, returnDate, bookCode, userId } = loanData;
    // Chamar a função createBorrowing com os dados do empréstimo
    useLoans
      .createBorrowing(userLogged.token, {
        loanDate,
        returnDate,
        bookCode,
        userId,
      })
      .then((response) => {
        console.log("Borrowing created:", response);
        // Fechar o diálogo após a criação do empréstimo
        handleCloseDialog();
      })
      .catch((error) => {
        console.error("Failed to create borrowing:", error);
      });
  };

  return (
    <MDBox>
      <MDButton onClick={handleOpenDialog}>Novo Empréstimo</MDButton>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            backgroundColor: "#202940",
            boxShadow: "none",
          },
        }}
      >
        <DialogTitle>Novo Empréstimo</DialogTitle>
        <DialogContent>
          <Box gridRow={4} sx={{ mb: 2 }}>
            <Box gridRow={1} sx={{ mb: 2 }}>
              <MDInput
                label="Data de Empréstimo"
                type="date"
                value={loanData.loanDate}
                onChange={(e) => setLoanData({ ...loanData, loanDate: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Box>

            <MDBox gridRow={2} sx={{ mb: 2 }}>
              <MDInput
                label="Data de Devolução"
                type="date"
                value={loanData.returnDate}
                onChange={(e) => setLoanData({ ...loanData, returnDate: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBox>

            <MDBox gridRow={3} sx={{ mb: 2 }}>
              <MDInput
                label="Tombo"
                type="number"
                value={loanData.bookCode}
                onChange={(e) => setLoanData({ ...loanData, bookCode: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </MDBox>
            <Box gridRow={4} sx={{ mb: 2 }}>
              <MDInput
                label="Usuário"
                type="text"
                value={loanData.userId}
                onChange={(e) => setLoanData({ ...loanData, userId: e.target.value })}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Box>
          </Box>
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
    </MDBox>
  );
}

export default NewBorrowingButton;
