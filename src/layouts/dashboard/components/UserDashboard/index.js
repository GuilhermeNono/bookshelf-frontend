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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
// Dashboard components
import RecentBooks from "layouts/dashboard/components/Books";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Box, CircularProgress, Grid } from "@mui/material";
import { useLoan } from "hooks/useLoan";
// eslint-disable-next-line no-unused-vars
import Book from "models/Book.model";
import UserLoanOverview from "../UserOverview";

// eslint-disable-next-line react/prop-types
function UserDashboard({ books, booksPromise }) {
  const [controller] = useMaterialUIController();
  const [ready, setReady] = useState(false);
  const [loanLengthPromise, setLoanLengthPromise] = useState(false);
  const [loanPromise, setLoanPromise] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [overdue, setOverdue] = useState();

  const [loan, setLoan] = useState();

  const useBorrowing = useLoan();

  const { userLogged, library } = controller;

  useEffect(() => {
    if (userLogged) {
      let user = 0;

      userLogged.librariesAccount.forEach((lib) => {
        if (lib.libraryId === JSON.parse(localStorage.getItem("bs-lid"))) {
          user = lib.userLibraryId;
        }
      });
      useBorrowing
        .getLibraryLoan(userLogged.token, library, [
          { filterKey: "userId", operation: "eq", value: user },
          { filterKey: "active", operation: "eq", value: true },
        ])
        .then((resp) => {
          if (resp) {
            setLoan(resp);
            setLoanPromise(true);
          }
        });

      useBorrowing
        .getLibraryLoan(userLogged.token, library, [
          { filterKey: "overdue", operation: "eq", value: true },
          { filterKey: "userId", operation: "eq", value: user },
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
                  // eslint-disable-next-line react/prop-types
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
                  title="Empréstimos ativos"
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
              <UserLoanOverview loanList={loan} />
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

UserDashboard.propTypes = {
  books: PropTypes.instanceOf(Book).isRequired,
  booksPromise: PropTypes.bool.isRequired,
};

export default UserDashboard;
