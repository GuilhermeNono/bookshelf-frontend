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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import warningPassword from "assets/images/exclamationMark.png";

function Cover() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CoverLayout coverHeight="5vh" image={bgImage}>
      <Card>
        <img
          src={warningPassword}
          style={{ width: "60px", height: "60px", margin: "1rem auto" }}
          alt=""
        />
        <MDBox mt={2} textAlign="center">
          <MDTypography variant="h5" fontWeight="bold" color="black">
            Forget Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="black" my={1} mr={5} ml={5}>
            Digite seu e-mail e enviaremos um link para redefinir sua senha
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={4}>
              <MDInput type="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton variant="gradient" color="success" fullWidth>
                Submit
              </MDButton>
              <MDTypography className="" display="block" color="black" my={1} fontWeight="light">
                Voltar para o login
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
