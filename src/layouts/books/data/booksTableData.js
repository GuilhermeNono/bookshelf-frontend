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
import MDAvatar from "components/MDAvatar";
import bookCape from "assets/images/book/harry_potter_pf.jpg";
import { Link } from "react-router-dom";

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
  const Author = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
  const Publisher = ({ name }) => (
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

  const BookPages = ({ pages }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {pages}
      </MDTypography>
    </MDBox>
  );

  const Details = () => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        <MDTypography
          component={Link}
          to="/authentication/sign-in"
          variant="button"
          color="info"
          fontWeight="bold"
          fontSize="25px"
          textGradient
        >
          +
        </MDTypography>
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "titulo", accessor: "book", align: "left" },
      { Header: "Autores", accessor: "author", align: "left" },
      { Header: "Editora", accessor: "publisher", align: "left" },
      { Header: "categorias", accessor: "categories", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Páginas", accessor: "pages", align: "center" },
      { Header: "Ano de Publicação", accessor: "release", align: "center" },
      { Header: "Detalhes", accessor: "details", align: "center" },
    ],

    rows: [
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },

      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
      {
        book: <Book image={bookCape} name="Harry Potter e a Pedra Filosofal" />,
        author: <Author name="J. K. Rowling" />,
        publisher: <Publisher name="Rocco" />,
        categories: <Categories title="Fantasia, Aventura, Ficção" />,
        release: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        pages: <BookPages pages="300" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="disponivel" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        details: <Details />,
      },
    ],
  };
}
