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

export default function data() {
  const BookTitle = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Categories = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );

  const BookNumber = ({ number }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {number}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "titulo", accessor: "bookTitle", align: "left" },
      { Header: "author", accessor: "author", align: "left" },
      { Header: "categorias", accessor: "categories", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Tombo", accessor: "number", align: "center" },
      { Header: "Ano de Publicação", accessor: "release", align: "center" },
    ],

    rows: [
      {
        bookTitle: <BookTitle name="Animais Fantásticos e Onde Habitam" />,
        author: <Author name="J. K. Rowling" />,
        categories: <Categories title="Fantasia" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="A revolução dos bichos" />,
        author: <Author name="George Orwell" />,
        categories: <Categories title="Distopia, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="indisponivel" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="Animais Fantásticos e Onde Habitam" />,
        author: <Author name="J. K. Rowling" />,
        categories: <Categories title="Fantasia" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="A revolução dos bichos" />,
        author: <Author name="George Orwell" />,
        categories: <Categories title="Distopia, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="indisponivel" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="Animais Fantásticos e Onde Habitam" />,
        author: <Author name="J. K. Rowling" />,
        categories: <Categories title="Fantasia" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="A revolução dos bichos" />,
        author: <Author name="George Orwell" />,
        categories: <Categories title="Distopia, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="indisponivel" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="Animais Fantásticos e Onde Habitam" />,
        author: <Author name="J. K. Rowling" />,
        categories: <Categories title="Fantasia" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
      {
        bookTitle: <BookTitle name="A revolução dos bichos" />,
        author: <Author name="George Orwell" />,
        categories: <Categories title="Distopia, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="indisponivel" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        number: <BookNumber number="2123" />,
      },
    ],
  };
}
