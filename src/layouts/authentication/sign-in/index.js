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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in.svg";
import logoImage from "assets/images/logos/Logo.svg";
import { useMaterialUIController } from "context";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();

  const { darkMode } = controller;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="contained"
          borderRadius="lg"
          mx={2}
          mt={0}
          pt={2}
          pl={2}
          pr={2}
          mb={0}
          textAlign="center"
        >
          <MDTypography
            variant="h2"
            textAlign="left"
            fontWeight="regular"
            color="unfocusTitle"
            mt={1}
          >
            {darkMode ? (
              <MDTypography variant="h2" textAlign="left" fontWeight="regular" color="white">
                <img
                  src={logoImage}
                  style={{ width: "40px", height: "43px", marginRight: "12px" }}
                  alt=""
                />{" "}
                Bookshelf
              </MDTypography>
            ) : (
              <MDTypography variant="h2" textAlign="left" fontWeight="regular" color="unfocusTitle">
                <img
                  src={logoImage}
                  style={{ width: "40px", height: "43px", marginRight: "12px" }}
                  alt=""
                />{" "}
                Bookshelf
              </MDTypography>
            )}
          </MDTypography>
          <MDTypography
            variant="h3"
            textAlign="left"
            fontWeight="regular"
            color={darkMode ? "white" : "unfocusTitle"}
            mt={2}
            mb={1}
          >
            Entrar
          </MDTypography>
          <MDTypography
            variant="h6"
            textAlign="left"
            fontWeight="regular"
            color={darkMode ? "white" : "unfocusSubtitle"}
            mt={0}
          >
            Entre em sua conta para utilizar dos recursos do sistema.
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox onSubmit={handleSubmit} component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                label="Email"
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                label="Password"
                fullWidth
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="contained" color="info" fullWidth>
                Entrar
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Não tem uma conta?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Crie uma!
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
