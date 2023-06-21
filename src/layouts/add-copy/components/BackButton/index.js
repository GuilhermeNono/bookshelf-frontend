import React from "react";
import { useNavigate } from "react-router-dom";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard/books");
  };

  return (
    <MDButton
      type="submit"
      variant="gradient"
      color="info"
      onClick={handleBack}
      sx={{ background: "none" }}
    >
      <Icon fontSize="regular">arrow_back_ios</Icon>
      <span> Voltar</span>
    </MDButton>
  );
}

export default BackButton;
