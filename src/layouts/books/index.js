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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useMaterialUIController } from "context";
import Footer from "examples/Footer";

// eslint-disable-next-line no-unused-vars
import DataTable from "examples/Tables/DataTable";

// Data
// eslint-disable-next-line no-unused-vars
import booksTableData from "layouts/books/data/booksTableData";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
// import MDProgress from "components/MDProgress";
import { useLibrary } from "hooks/useLibrary";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { usePermission } from "hooks/usePermission";
import {
  PERM_BOOKSHELF_LIB_BOOKS_BOOK_ADD,
  PERM_BOOKSHELF_LIB_BOOKS_COPY_ADD,
} from "helpers/auth/Permisions";
import { CircularProgress } from "@mui/material";

function Books() {
  const [books, setBooks] = useState();
  const useLibraries = useLibrary();
  const [controller] = useMaterialUIController();
  const { hasPermission } = usePermission();
  const [doNotHavePermissionToAddBook, setDoNotHavePermissionToAddBook] = useState(false);
  const [doNotHavePermissionToAddCopy, setDoNotHavePermissionToAddCopy] = useState(false);
  const { userLogged, library } = controller;

  useEffect(() => {
    if (userLogged) {
      useLibraries.getLibraryBooks(userLogged.token, library).then((resp) => {
        if (resp) {
          booksTableData(resp).then((data) => {
            setBooks(data);
          });
        }
      });
    }
  }, [userLogged]);

  useEffect(() => {
    if (userLogged) {
      const canAddBook = hasPermission(PERM_BOOKSHELF_LIB_BOOKS_BOOK_ADD, library);
      const canAddCopy = hasPermission(PERM_BOOKSHELF_LIB_BOOKS_COPY_ADD, library);

      if (!canAddBook) {
        setDoNotHavePermissionToAddBook(true);
      }

      if (!canAddCopy) {
        setDoNotHavePermissionToAddCopy(true);
      }
    }
  }, [userLogged]);

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
                px={3}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDBox display="flex" alignItems="center" justifyContent="space-between">
                  <MDTypography variant="h5">Acervo da Biblioteca</MDTypography>
                  {!doNotHavePermissionToAddBook && !doNotHavePermissionToAddCopy ? (
                    <MDBox display="flex" alignItems="center">
                      {!doNotHavePermissionToAddBook && (
                        <MDButton
                          component={Link}
                          to="/dashboard/add-book"
                          fontWeight="bold"
                          fontSize="25px"
                          color="success"
                          sx={{ mr: 5 }}
                        >
                          Adicionar Livro
                        </MDButton>
                      )}
                      {!doNotHavePermissionToAddCopy && (
                        <MDButton
                          component={Link}
                          to="/dashboard/add-copy"
                          fontWeight="bold"
                          fontSize="25px"
                          color="success"
                        >
                          Adicionar cópia
                        </MDButton>
                      )}
                    </MDBox>
                  ) : (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <></>
                  )}
                </MDBox>
              </MDBox>
              <MDBox pt={3}>
                {false ? (
                  <DataTable
                    table={books}
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

export default Books;
