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
// eslint-disable-next-line no-unused-vars
import { Autocomplete, CircularProgress, Icon, createFilterOptions } from "@mui/material";
import MDInput from "components/MDInput";
// @DL
function Books() {
  const [books, setBooks] = useState();
  const [booksResp, setBooksResp] = useState();
  const [selectedBook, setselectedBook] = useState();
  const useLibraries = useLibrary();
  const [controller] = useMaterialUIController();
  const { hasPermission } = usePermission();
  const [doNotHavePermissionToAddBook, setDoNotHavePermissionToAddBook] = useState(false);
  const [doNotHavePermissionToAddCopy, setDoNotHavePermissionToAddCopy] = useState(false);
  const { userLogged, library } = controller;

  useEffect(() => {
    if (userLogged) {
      useLibraries.getLibraryBooksNoLimit(userLogged.token, library).then((resp) => {
        if (resp) {
          setBooksResp(resp);
          booksTableData(resp).then((data) => {
            setBooks(data);
          });
        }
      });
    }
  }, [userLogged]);

  useEffect(() => {
    if (selectedBook) {
      useLibraries
        .getLibraryBooksNoLimit(userLogged.token, library, [
          { filterKey: "name", operation: "cn", value: selectedBook.name },
        ])
        .then((resp) => {
          if (resp) {
            booksTableData(resp).then((data) => {
              setBooks(data);
            });
          }
        });
    } else {
      useLibraries.getLibraryBooksNoLimit(userLogged.token, library).then((resp) => {
        if (resp) {
          setBooksResp(resp);
          booksTableData(resp).then((data) => {
            setBooks(data);
          });
        }
      });
    }
  }, [selectedBook]);

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

  const filterOptions = createFilterOptions({
    stringify: ({ name, code }) => `${name} ${code}`,
  });

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
                    <MDBox display="flex" alignItems="center" justifyContent="center">
                      <MDBox
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mr={3}
                        sx={{ width: "300px" }}
                      >
                        <MDBox sx={{ width: "250px" }}>
                          <Autocomplete
                            freeSolo
                            id="combo-box-demo"
                            options={booksResp}
                            getOptionLabel={(option) => option.name}
                            filterOptions={filterOptions}
                            renderInput={(params) => (
                              <MDInput {...params} sx={{ paddingBottom: "0" }} label="Livros" />
                            )}
                            value={selectedBook}
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            onChange={(event, value) => setselectedBook(value)}
                          />
                        </MDBox>
                      </MDBox>
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
                {books ? (
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
