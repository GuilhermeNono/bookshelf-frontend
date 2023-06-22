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
import PropTypes from "prop-types";
// Material Dashboard 2 React example components
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import RecentBooks from "layouts/dashboard/components/Books";
import AdminOverview from "layouts/dashboard/components/AdminOverview";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Box, CircularProgress, Grid } from "@mui/material";
import { useLoan } from "hooks/useLoan";
// import { useRole } from "hooks/hasRole";
// import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Book from "models/Book.model";

function AdminDashboard({ books, booksPromise }) {
  // const { sales, tasks } = reportsLineChartData;
  const [controller] = useMaterialUIController();
  const [ready, setReady] = useState(false);
  const [loanLengthPromise, setLoanLengthPromise] = useState(false);
  const [loanPromise, setLoanPromise] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [overdue, setOverdue] = useState();

  const [loan, setLoan] = useState();

  const useBorrowing = useLoan();

  const filters = [
    {
      filterKey: "loanDateMonth",
      operation: "eq",
      value: 6,
    },
    {
      filterKey: "loanDateYear",
      operation: "eq",
      value: new Date().getFullYear(),
    },
    {
      filterKey: "returnDateMonth",
      operation: "eq",
      value: 6,
    },
    {
      filterKey: "returnDateYear",
      operation: "eq",
      value: new Date().getFullYear(),
    },
  ];

  const { userLogged, library } = controller;

  useEffect(() => {
    if (userLogged) {
      useBorrowing.getLibraryLoan(userLogged.token, library, filters).then((resp) => {
        if (resp) {
          setLoan(resp);
          setLoanPromise(true);
        }
      });

      useBorrowing
        .getLibraryLoan(userLogged.token, library, [
          { filterKey: "overdue", operation: "eq", value: true },
          { filterKey: "active", operation: "eq", value: true },
        ])
        .then((resp) => {
          if (resp) {
            setOverdue(resp.length);
            setLoanLengthPromise(true);
          }
        });
    }
  }, [userLogged]);

  useEffect(() => {
    if (userLogged && library) {
      setReady(true);
    }
  }, [userLogged, library]);

  return ready ? (
    <>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              {booksPromise ? (
                <ComplexStatisticsCard
                  color="dark"
                  icon="book"
                  title="Novos livros"
                  count={books && books.length}
                />
              ) : (
                <ComplexStatisticsCard color="dark" icon="book" title="Aguarde..." />
              )}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              {loanPromise ? (
                <ComplexStatisticsCard
                  icon="collectionsbookmark"
                  title="Empréstimos"
                  count={loan && loan.length}
                />
              ) : (
                <ComplexStatisticsCard icon="collectionsbookmark" title="Aguarde..." />
              )}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={1.5}>
              {loanLengthPromise ? (
                <ComplexStatisticsCard
                  color="error"
                  icon="alarmoff"
                  title="Em atraso"
                  count={overdue && overdue}
                />
              ) : (
                <ComplexStatisticsCard color="error" icon="alarmoff" title="Aguarde..." />
              )}
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <RecentBooks books={books} />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <AdminOverview loanList={loan} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </>
  ) : (
    <Box sx={{ height: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}

AdminDashboard.propTypes = {
  books: PropTypes.instanceOf(Book).isRequired,
  booksPromise: PropTypes.bool.isRequired,
};

export default AdminDashboard;
