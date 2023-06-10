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

export default async function data(books) {
  // eslint-disable-next-line no-unused-vars

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
        {name.length > 35 ? `${name.substring(0, 35)}...` : name}
      </MDTypography>
    </MDBox>
  );

  const Publisher = ({ publisher }) => (
    <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="center">
      {publisher}
    </MDTypography>
  );

  const BookIdentifier = ({ identifier }) => (
    <MDTypography fontSize="1em" fontWeight="medium">
      {identifier}
    </MDTypography>
  );

  const CreatedAt = ({ date }) => (
    <MDTypography width="8rem" textAlign="center" fontSize="1em" fontWeight="medium">
      {date}
    </MDTypography>
  );

  const handleDataTableRows = () => {
    const booksRow = [];
    if (books.length > 0) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 6; i++) {
        const date = books[i].createdAt.substring(0, 10).split("-").reverse().join("/");
        booksRow.push({
          identifier: <BookIdentifier identifier={books[i].code} />,
          name: <Book image={books[i].cape} name={books[i].name} />,
          publisher: <Publisher publisher={books[i].publisher} />,
          added: <CreatedAt date={date} />,
        });
      }
    }
    return booksRow;
  };
  return {
    columns: [
      { Header: "Tombo", accessor: "identifier", width: "10%", align: "left" },
      { Header: "Nome", accessor: "name", width: "45%", align: "left" },
      { Header: "Editora", accessor: "publisher", width: "35%", align: "center" },
      { Header: "Adicionado", accessor: "added", width: "10%", align: "center" },
    ],

    rows: handleDataTableRows(),
  };
}
