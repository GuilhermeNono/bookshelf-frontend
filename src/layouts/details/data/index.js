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
import MDBadge from "../../../components/MDBadge";

function data() {
  return {
    columns: [
      { Header: "Status", accessor: "status", width: "10%", align: "left" },
      { Header: "Nome", accessor: "user", width: "10%", align: "left" },
      { Header: "Livro", accessor: "book", width: "10%", align: "left" },
      { Header: "Curso", accessor: "course", width: "10%", align: "right" },
    ],

    rows: [
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="error"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="error"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="error"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="warning"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="warning"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="warning"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Atraso"
              color="warning"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Em dia"
              color="success"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Em dia"
              color="success"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
      {
        status: (
          <MDBox>
            <MDBadge
              badgeContent="Em dia"
              color="success"
              variant="gradient"
              size="sm"
              textAlign="left"
            />
          </MDBox>
        ),
        // TODO: Logo Será a capa do livro
        user: "Guilherme Nono",
        book: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            Harry Potter e a Pedra Filosofal
          </MDTypography>
        ),
        course: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
            3º DS
          </MDTypography>
        ),
      },
    ],
  };
}

export default data;
