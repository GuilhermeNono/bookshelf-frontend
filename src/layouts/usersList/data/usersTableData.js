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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function data() {
  const UserName = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const RmOrCpf = ({ number }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {number}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const State = ({ name }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDBox ml={-1}>
        <MDBadge badgeContent={name} color="success" variant="gradient" size="lg" />
      </MDBox>
    </MDBox>
  );

  const Action = ({ name }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography component="a" href="#" variant="caption" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Nome", accessor: "userName", align: "center" },
      { Header: "RM/CPF", accessor: "rmCpf", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Ações", accessor: "acoes", align: "center" },
    ],

    rows: [
      {
        userName: <UserName name="Kauan Moreira Pereira" />,
        rmCpf: <RmOrCpf number="123.456.789-10" />,
        status: <State name="Ativo" />,
        acoes: <Action name="Edit" />,
      },
      {
        userName: <UserName name="Gabriel de Costa" />,
        rmCpf: <RmOrCpf number="123.456.789-10" />,
        status: <State name="Ativo" />,
        acoes: <Action name="Edit" />,
      },
      {
        userName: <UserName name="Guilherme Nono" />,
        rmCpf: <RmOrCpf number="123.456.789-10" />,
        status: <State name="Ativo" />,
        acoes: <Action name="Edit" />,
      },
      {
        userName: <UserName name="João Pedro Maria" />,
        rmCpf: <RmOrCpf number="123.456.789-10" />,
        status: <State name="Ativo" />,
        acoes: <Action name="Edit" />,
      },
    ],
  };
}

export default data;
