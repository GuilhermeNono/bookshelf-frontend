import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Box } from "@mui/system";

function AuthorsSection({
  authors,
  allAuthors,
  handleAuthorChange,
  handleAuthorDelete,
  handleAddNewAuthor,
}) {
  const [isAddAuthorPopupOpen, setAddAuthorPopupOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState({ firstName: "", lastName: "", avatar: "" });

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
      handleAddNewAuthor(newAuthor);
      setNewAuthor({ firstName: "", lastName: "", avatar: "" });

      // Fechar o popup de adição de autor
      setAddAuthorPopupOpen(false);
    }
  };

  const renderTags = (value, getTagProps) =>
    value.map((author, index) => (
      <MDButton
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

  return (
    <Box>
      <Autocomplete
        multiple
        limitTags={2}
        options={allAuthors}
        getOptionLabel={(author) => `${author.firstName} ${author.lastName}`}
        value={authors}
        onChange={(event, value) => handleAuthorChange(value)}
        renderInput={(params) => (
          <TextField {...params} label="Autores" variant="outlined" placeholder="Adicionar autor" />
        )}
        renderTags={renderTags}
      />
      <Box mt={2}>
        <MDButton variant="contained" color="primary" onClick={handleOpenAddAuthorPopup}>
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
            <Box mt={2} display="flex" justifyContent="flex-end">
              <MDButton onClick={handleCloseAddAuthorPopup}>Cancelar</MDButton>
              <MDButton onClick={handleNewAuthorAddition} color="primary">
                Adicionar
              </MDButton>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}

export default AuthorsSection;
