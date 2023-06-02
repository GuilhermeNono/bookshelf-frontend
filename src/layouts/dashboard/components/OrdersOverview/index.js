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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";
import { useLoan } from "hooks/useLoan";
import data from "./data";
import DataTable from "../../../../examples/Tables/DataTable";

// Material Dashboard 2 React example components

function OrdersOverview() {
  const [loanList, setLoanList] = useState();
  // eslint-disable-next-line no-unused-vars
  const [newLoanCount, setNewLoanCount] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  const { library, token } = controller;
  const useBorrowing = useLoan();

  useEffect(() => {
    useBorrowing.getLibraryLoanOfMonth(token, library).then((resp) => {
      if (resp) {
        data(resp).then((loan) => {
          setLoanList(loan);
        });
        setNewLoanCount(resp.length);
      }
    });
  }, []);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Emprestimos do mês
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            Nesse mês
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2} sx={{ height: "100%" }}>
        <MDBox>
          {/* TODO: Refazer esse datatable com os livros mais recentes do sistema. */}
          {loanList && (
            <DataTable
              table={loanList}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
              entriesPerPage={false}
            />
          )}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;

/* <TimelineItem */
/*  color="success" */
/*  icon="notifications" */
/*  title="$2400, Design changes" */
/*  dateTime="22 DEC 7:20 PM" */
/* /> */
/* <TimelineItem */
/*  color="error" */
/*  icon="inventory_2" */
/*  title="New order #1832412" */
/*  dateTime="21 DEC 11 PM" */
/* /> */
/* <TimelineItem */
/*  color="info" */
/*  icon="shopping_cart" */
/*  title="Server payments for April" */
/*  dateTime="21 DEC 9:34 PM" */
/* /> */
/* <TimelineItem */
/*  color="warning" */
/*  icon="payment" */
/*  title="New card added for order #4395133" */
/*  dateTime="20 DEC 2:20 AM" */
/* /> */
/* <TimelineItem */
/*  color="primary" */
/*  icon="vpn_key" */
/*  title="New card added for order #4395133" */
/*  dateTime="18 DEC 4:54 AM" */
/*  lastItem */
