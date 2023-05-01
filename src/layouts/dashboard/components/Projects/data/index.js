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
import MDAvatar from "components/MDAvatar";

// Images
import bookCape from "assets/images/book/harry_potter_pf.jpg";

export default function data() {
  const Book = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar
        src={image}
        name={name}
        size="sm"
        sx={{
          borderRadius: "0",
          alignContent: "center",
          boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.19)",
        }}
      />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Tombo", accessor: "identifier", width: "10%", align: "left" },
      { Header: "Nome", accessor: "name", width: "45%", align: "left" },
      { Header: "Editora", accessor: "publisher", width: "35%", align: "center" },
      { Header: "Adicionado", accessor: "added", width: "10%", align: "center" },
    ],

    rows: [
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        // TODO: Logo Será a capa do livro
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
      {
        identifier: <MDTypography fontSize="1em">152485</MDTypography>,
        name: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        publisher: (
          <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
            Rocco
          </MDTypography>
        ),
        added: (
          <MDTypography width="8rem" textAlign="center" fontSize="1em">
            16/04/2023
          </MDTypography>
        ),
      },
    ],
  };
}
