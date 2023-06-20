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

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

// eslint-disable-next-line react/prop-types
function RecentBooks({ books }) {
  const [menu, setMenu] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [booksTable, setBooksTable] = useState();
  const [ready, setReady] = useState(true);
  const [newBooksCount, setNewBooksCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (ready) {
      if (books) {
        // eslint-disable-next-line no-unused-vars
        data(books).then((bookList) => {
          setBooksTable(bookList);
        });
        setNewBooksCount(books.length);
        setReady(false);
      }
    }
  }, [books]);

  const handleNewBooksCount = () => {
    if (newBooksCount > 0) {
      if (newBooksCount > 1) {
        return (
          <>
            &nbsp;<strong>{newBooksCount} novos</strong> Livros nesse mês
          </>
        );
      }
      return (
        <>
          &nbsp;<strong>{newBooksCount} novo</strong> Livro nesse mês
        </>
      );
    }
    return "";
  };

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const navigateToBooks = () => navigate("/dashboard/books");

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={navigateToBooks}>Ir para livros</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Livros mais recentes
          </MDTypography>
          {booksTable && booksTable.rows.length > 0 && (
            <MDBox display="flex" alignItems="center" lineHeight={0}>
              <Icon
                sx={{
                  fontWeight: "bold",
                  color: ({ palette: { info } }) => info.main,
                  mt: -0.5,
                }}
              >
                done
              </Icon>
              <MDTypography variant="button" fontWeight="regular" color="text">
                {handleNewBooksCount()}
              </MDTypography>
            </MDBox>
          )}
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <MDBox
        p={3}
        sx={{
          height: "100%",
        }}
      >
        {/* TODO: Refazer esse datatable com os livros mais recentes do sistema. */}
        {booksTable && booksTable.rows.length > 0 ? (
          <DataTable
            table={booksTable}
            showTotalEntries={false}
            isSorted={false}
            noEndBorder
            entriesPerPage={false}
          />
        ) : (
          <MDBox
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MDTypography
              sx={{ textAlign: "center" }}
              fontWeight="medium"
              horizontalAlign="middle"
              verticalAlign="middle"
            >
              Não temos registro de novos livros nesse mês até o momento.
              <Box
                sx={{
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            </MDTypography>
          </MDBox>
        )}
      </MDBox>
    </Card>
  );
}

RecentBooks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

export default RecentBooks;
