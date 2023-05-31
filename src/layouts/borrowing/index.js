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
import { useLibrary } from "hooks/useLibrary";
import { useParams } from "react-router-dom";
import borrowingTableData from "./data/borrowingTableData";
import ComplexStatisticsCard from "../../examples/Cards/StatisticsCards/ComplexStatisticsCard";

function borrowing() {
  const useLibraries = useLibrary();
  const [controller] = useMaterialUIController();
  const { columns, rows } = borrowingTableData();
  const { token } = controller;

  const [books, setBooks] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    // TODO: useLibraries.getLibraryBooks(tokenDeAcesso, idDaBiblioteca, filtrosDePesquisa)
    useLibraries
      .getLibraryBooks(token, localStorage.getItem("bs-lid"), [
        { filterKey: "code", value: id, operation: "eq" },
      ])
      .then((resp) => {
        // TODO: Insere o primeiro elemento que vier do metodo getLibraryBooks no state bookInfo.
        setBooks(resp[0]);
      });
  }, []);

  console.log(`${books}`);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard icon="collectionsbookmark" title="Empréstimos" count="10" />
          </MDBox>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <MDBox mb={1.5}>
            <ComplexStatisticsCard color="error" icon="alarmoff" title="Em atraso" count="7" />
          </MDBox>
        </Grid>
      </Grid>
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
                  teste
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
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
