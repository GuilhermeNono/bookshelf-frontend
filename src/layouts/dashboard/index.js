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
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import RecentBooks from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Box, CircularProgress, Grid } from "@mui/material";
import { useLoan } from "hooks/useLoan";
import { useLibrary } from "hooks/useLibrary";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;
  const [controller] = useMaterialUIController();
  const [ready, setReady] = useState(false);
  const [books, setBooks] = useState();
  const [overdue, setOverdue] = useState();
  const [loan, setLoan] = useState();

  const useBorrowing = useLoan();
  const useLibraries = useLibrary();

  const { token, library } = controller;

  useEffect(() => {
    if (token && library) {
      setReady(true);
    }
  }, [token, library]);

  useEffect(() => {
    useBorrowing.getLibraryLoan(token, library).then((resp) => {
      if (resp) {
        setLoan(resp);
      }
    });

    useBorrowing
      .getLibraryLoan(token, library, [{ filterKey: "overdue", operation: "eq", value: true }])
      .then((resp) => {
        if (resp) {
          setOverdue(resp.length);
        }
      });

    useLibraries.getLibraryBooksOfMonth(token, library).then((resp) => {
      if (resp) {
        setBooks(resp);
      }
    });
  }, []);

  return ready ? (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="book"
                title="Novos livros"
                count={books && books.length}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="collectionsbookmark"
                title="Empréstimos"
                count={loan && loan.length}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="alarmoff"
                title="Em atraso"
                count={overdue && overdue}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <RecentBooks books={books} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <OrdersOverview loanList={loan} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  ) : (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ height: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
