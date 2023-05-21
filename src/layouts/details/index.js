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
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
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
              <MDBox sx={{ margin: "3rem 1.5rem 1rem 3rem" }}>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={9} md={5} lg={4}>
                    <MDBox
                      component="img"
                      sx={{
                        maxWidth: "100%",
                        borderRadius: "0.7rem",
                        width: "400px",
                      }}
                      src={Cape}
                      alt="Capa"
                    />
                  </Grid>
                  <Grid xs={10.5} sm={6.6} lg={7.5} sx={{ ml: 2 }}>
                    <MDTypography variant="h4" align="center">
                      Harry Potter e a Pedra Filosofal
                    </MDTypography>
                    <Grid container>
                      <Avatar src={JkRowling} alt="J.k.Rowling" sx={{ width: 130, height: 130 }} />
                      <MDBox
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          mb: "15px",
                        }}
                      >
                        <MDTypography variant="h5">J.K.Rowling</MDTypography>
                        <MDTypography variant="h6" sx={{ color: "#cecece", fontWeight: "400" }}>
                          Autor(a)
                        </MDTypography>
                      </MDBox>
                    </Grid>
                    <MDTypography
                      variant="p"
                      align="justify"
                      sx={{
                        fontSize: "0.8em",
                        fontWeight: "400",
                        color: "#cecece",
                      }}
                    >
                      Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um
                      poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para
                      a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até
                      os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios,
                      herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado
                      como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece
                      deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que
                      o conduz a um mundo mágico.
                    </MDTypography>
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
