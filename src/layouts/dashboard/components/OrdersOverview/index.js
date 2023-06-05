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
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import data from "./data";
import DataTable from "../../../../examples/Tables/DataTable";

// Material Dashboard 2 React example components

function OrdersOverview({ loanList }) {
  // eslint-disable-next-line no-unused-vars
  const [newLoanCount, setNewLoanCount] = useState(0);
  const [menu, setMenu] = useState(null);
  const [loanTable, setLoanTable] = useState();
  const [ready, setReady] = useState(true);
  const navigate = useNavigate();

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const navigateToLoans = () => navigate("/dashboard/loans");

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
      <MenuItem onClick={navigateToLoans}>Ir para Emprestimos</MenuItem>
    </Menu>
  );

  useEffect(() => {
    if (ready) {
      if (loanList) {
        data(loanList).then((loan) => {
          setLoanTable(loan);
        });
        setNewLoanCount(loanList.length);
        setReady(false);
      }
    }
  }, [loanList]);

  console.log(loanTable);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3} display="flex" justifyContent="space-between" alignItems="center">
        <MDBox>
          <MDTypography variant="h6" fontWeight="medium">
            Emprestimos do mês
          </MDTypography>
          {loanTable && loanTable.rows.length > 0 && (
            <MDBox mt={0} mb={2} display="flex" alignItems="center" lineHeight={0}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                <MDTypography display="inline" variant="body2">
                  <Icon sx={{ color: ({ palette: { success } }) => success.main }}>
                    arrow_upward
                  </Icon>
                </MDTypography>
                &nbsp;
                <MDTypography variant="button" color="text" fontWeight="medium">
                  24%
                </MDTypography>{" "}
                Nesse mês
              </MDTypography>
            </MDBox>
          )}
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
          {renderMenu}
        </MDBox>
      </MDBox>
      <MDBox p={2} sx={{ height: "100%" }}>
        <MDBox sx={{ height: "100%" }}>
          {/* TODO: Refazer esse datatable com os livros mais recentes do sistema. */}
          {loanTable && loanTable.rows.length > 0 ? (
            <DataTable
              table={loanTable}
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
                Não temos registro de emprestimos nesse mês até o momento.
              </MDTypography>
            </MDBox>
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

OrdersOverview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  loanList: PropTypes.array.isRequired,
};

export default OrdersOverview;
