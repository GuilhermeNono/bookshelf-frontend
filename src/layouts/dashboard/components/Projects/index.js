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
import { useMaterialUIController } from "context";
import { useLibrary } from "hooks/useLibrary";

function RecentBooks() {
  const [menu, setMenu] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState();
  const [newBooksCount, setNewBooksCount] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  const { library, token } = controller;
  const useLib = useLibrary();

  useEffect(() => {
    useLib.getLibraryBooksOfMonth(token, library).then((resp) => {
      if (resp) {
        data(resp).then((bookList) => {
          setBooks(bookList);
        });
        setNewBooksCount(resp.length);
      }
    });
  }, []);

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
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Livros mais recentes
          </MDTypography>
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
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <MDBox p={3}>
        {/* TODO: Refazer esse datatable com os livros mais recentes do sistema. */}
        {books && (
          <DataTable
            table={books}
            showTotalEntries={false}
            isSorted={false}
            noEndBorder
            entriesPerPage={false}
          />
        )}
      </MDBox>
    </Card>
  );
}

export default RecentBooks;
