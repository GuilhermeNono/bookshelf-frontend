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
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Box, CircularProgress, Grid } from "@mui/material";
import { useLibrary } from "hooks/useLibrary";
// import { useRole } from "hooks/hasRole";
// import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { ROLE_LIBRARY_ADMIN } from "helpers/auth/Permisions";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";

function Dashboard() {
  // const { sales, tasks } = reportsLineChartData;
  const [controller] = useMaterialUIController();
  const [readyReq, setReadyReq] = useState(false);
  const [readyPerm, setReadyPerm] = useState(false);
  const [booksPromise, setBooksPromise] = useState(false);
  const [books, setBooks] = useState();
  // eslint-disable-next-line no-unused-vars
  const [highRole, setHighRole] = useState(false);

  const useLibraries = useLibrary();
  const { userLogged, library } = controller;

  useEffect(() => {
    if (userLogged) {
      userLogged.librariesAccount.forEach((lib) => {
        const profName = lib.profile;
        if (lib.libraryId === Number(library)) {
          if (profName === ROLE_LIBRARY_ADMIN) {
            setHighRole(true);
          }
        }
      });
      setReadyPerm(true);
    }
  }, [userLogged]);

  useEffect(() => {
    if (userLogged) {
      useLibraries.getLibraryBooksOfMonth(userLogged.token, library).then((resp) => {
        if (resp) {
          setBooks(resp);
          setBooksPromise(true);
          setReadyReq(true);
        }
      });
    }
  }, [userLogged]);

  return readyReq && readyPerm ? (
    <DashboardLayout>
      <DashboardNavbar />
      {highRole ? (
        // Admin DashBoard
        <AdminDashboard books={books} booksPromise={booksPromise} />
      ) : (
        // User Dashboard
        <UserDashboard books={books} booksPromise={booksPromise} />
      )}
    </DashboardLayout>
  ) : (
    <Box sx={{ height: 100, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default Dashboard;
