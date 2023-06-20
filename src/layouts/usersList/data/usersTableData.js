/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images

export default async function data(users) {
  const Users = () => {
    if (users) {
      const resp = [];
      users.forEach((element) => {
        resp.push({
          eMail: <UserEmail email={element.userEmail} />,
        });
        console.log(element.email);
      });
      return resp;
    }
    return [];
  };

  const UserEmail = ({ email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {email}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [{ Header: "Email", accessor: "eMail", width: "10%", align: "left" }],
    rows: Users(),
  };
}
