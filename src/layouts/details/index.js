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

import Cape from "assets/images/book/harry_potter_pf.jpg";
import JkRowling from "assets/images/avatar/imgAvatar.png";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";

import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

function Details() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                <MDTypography variant="h6" color="white">
                  Detalhes
                </MDTypography>
              </MDBox>
              <MDBox sx={{ flexGrow: 1, mr: 5, ml: 5, mt: 5 }}>
                <Grid container spacing={2}>
                  <Grid xs={12} md={5} lg={4}>
                    <img
                      style={{ maxWidth: "100%" }}
                      width="400px"
                      height="500px"
                      src={Cape}
                      alt="Capa"
                    />
                  </Grid>
                  <Grid xs lg={7.5} sx={{ ml: 5 }}>
                    <MDTypography align="center">Harry Potter e a Pedra Filosofal</MDTypography>
                    <Grid container>
                      <Avatar src={JkRowling} alt="J.k.Rowling" sx={{ width: 130, height: 130 }} />
                      <MDBox
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                      >
                        <MDTypography variant="h4">J.K.Rowling</MDTypography>
                        <MDTypography variant="h4">J.K.Rowling</MDTypography>
                      </MDBox>
                    </Grid>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <li>Link 1.1</li>
                      <li>Link 1.2</li>
                      <li>Link 1.3</li>
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

export default Details;

/* <Grid
        xs={12}
        container
        justifyContent="space-between"
        alignps="center"
        flexDirection={{ xs: "column", sm: "row" }}
        sx={{ fontSize: "12px" }}
      >
        <Grid sx={{ order: { xs: 2, sm: 1 } }}>
          <p>© Copyright</p>
        </Grid>
        <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
          <Grid>
            <p>Link A</p>
          </Grid>
          <Grid>
            <p>Link B</p>
          </Grid>
          <Grid>
            <p>Link C</p>
          </Grid>
        </Grid>
      </Grid>
      */
