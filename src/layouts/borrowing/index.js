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
import MDProgress from "components/MDProgress";
import borrowingTableData from "layouts/borrowing/data/borrowingTableData";

function borrowing() {
  const useLoans = useLoan();
  const [controller] = useMaterialUIController();
  const { token, library } = controller;

  const [loans, setLoans] = useState();

  // useEffect(() => {
  //   if (token) {
  //     useLoans.getAllLoans(token).then((resp) => {
  //       if (resp) {
  //         borrowingTableData(resp).then((data) => {
  //           setLoans(data);
  //         });
  //       }
  //     });
  //   }
  // }, [token]);

  useEffect(() => {
    if (token) {
      useLoans.getLibraryLoan(token, library).then((resp) => {
        if (resp) {
          borrowingTableData(resp).then((data) => {
            setLoans(data);
          });
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
                  Emprestimos na biblioteca
                </MDTypography>
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
                  <MDProgress />
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
