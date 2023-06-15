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
import { Box, CircularProgress, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useMaterialUIController, setCurrentBook } from "context";
import { useLoan } from "hooks/useLoan";
import { useParams } from "react-router-dom";
import { useLibrary } from "hooks/useLibrary";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Footer from "../../examples/Footer";

function LoansDetails() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const useLoans = useLoan();
  const useLibraries = useLibrary();
  const { libId } = useParams();
  const [controller, dispatch] = useMaterialUIController();
  const [loan, setLoans] = useState(null);
  const [book, setBooks] = useState(null);
  const { token, library } = controller;

  useEffect(() => {
    useLibraries.getLibraryBooks(token, library).then((response) => {
      if (response) {
        setBooks(response[0]);
        setCurrentBook(dispatch, response[0]);
      }
      console.log(book);
    });
  }, [token]);

  useEffect(() => {
    if (token) {
      useLoans
        .getLibraryLoan(token, library, [{ filterKey: "userId", operation: "eq", value: libId }])
        .then((resp) => {
          if (resp) {
            setLoans(resp[0]);
          }
        });
    }
  }, [token]);

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
              {loan && book ? (
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
                        src="#"
                        alt="cape"
                      />
                    </Grid>
                    <Grid xs={10.5} sm={6.6} lg={7.5} sx={{ ml: 2 }}>
                      <Grid
                        mt={1}
                        sx={
                          matches
                            ? { display: "block" }
                            : {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gridTemplateRows: "repeat(6, 1fr)",
                                gap: 2,
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
                            Nome:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.userName}
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
                            Curso:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {`${loan.courses[0].module}° ${loan.courses[0].name} ${loan.courses[0].class}`}
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
                            Periodo:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.courses[0].period}
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
                            Data de Emprestimo:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.loanDate}
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
                            Data de Devolução:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.returnDate}
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
                            Data de Renovação:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.renewalDate
                              ? loan.renewalDate.substring(0, 10).split("-").reverse().join("/")
                              : "N/A"}
                          </MDTypography>
                        </Box>
                        {loan.overdue ? (
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
                              Status:
                            </MDTypography>
                            <MDTypography
                              variant="h6"
                              sx={{ color: "#FF0000", fontWeight: "400", fontSize: "0.7em" }}
                            >
                              Em atraso
                            </MDTypography>
                          </Box>
                        ) : (
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
                              Status:
                            </MDTypography>
                            <MDTypography
                              variant="h6"
                              sx={{ color: "#00FF0A", fontWeight: "400", fontSize: "0.7em" }}
                            >
                              Em dia
                            </MDTypography>
                          </Box>
                        )}
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
                            Livro:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.book}
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
                            Autor:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {}
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
                            Capa:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {book.capeType}
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
                            Tombo:
                          </MDTypography>
                          <MDTypography
                            variant="h6"
                            sx={{ color: "#cecece", fontWeight: "400", fontSize: "0.7em" }}
                          >
                            {loan.bookId}
                          </MDTypography>
                        </Box>
                      </Grid>
                    </Grid>
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

export default LoansDetails;
