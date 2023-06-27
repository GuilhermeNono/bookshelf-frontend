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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import { useMaterialUIController } from "context";
import { useLoan } from "hooks/useLoan";
import borrowingTableData from "layouts/borrowing/data/borrowingTableData";
import { CircularProgress } from "@mui/material";
import NewBorrowingButton from "./components/NewBorrowingButton";

function borrowing() {
  const useLoans = useLoan();
  const [controller] = useMaterialUIController();

  const { userLogged, library } = controller;

  const [loans, setLoans] = useState();

  const fetchLoans = async () => {
    if (userLogged) {
      const resp = await useLoans.getLibraryLoan(userLogged.token, library);
      if (resp) {
        const data = await borrowingTableData(resp);
        setLoans(data);
      }
    }
  };

  useEffect(() => {
    const fetchLoansAndListen = async () => {
      await fetchLoans(); // Buscar empréstimos inicialmente
    };

    fetchLoansAndListen();
  }, [userLogged, library]);

  const handleBorrowingCompleted = () => {
    fetchLoans(); // Atualize os empréstimos quando um empréstimo for concluído
  };

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
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Empréstimos na biblioteca
                </MDTypography>

                <NewBorrowingButton onBorrowingCompleted={handleBorrowingCompleted} />
              </MDBox>

              <MDBox pt={3}>
                {loans ? (
                  <DataTable
                    table={loans}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                ) : (
                  <MDBox mb={3}>
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
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default borrowing;
