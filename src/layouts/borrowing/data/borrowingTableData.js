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
// import MDBadge from "../../../components/MDBadge";

export default async function data(loans) {
  const Loans = () => {
    if (loans) {
      const resp = [];
      loans.forEach((element) => {
        resp.push({
          // book: <Book image={element.cape} name={element.name} />,
          user: <Name name={element.userName} />,
          book: <Book name={element.books} />,
          loanDt: <Dates date={element.loanDate} />,
          returnDt: <Dates date={element.returnDate} />,
          // pages: <BookPages pages={element.numberPages} />,
          // details: <Details code={element.code} />,
        });
      });
      return resp;
    }
    return [];
  };

  const Name = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Book = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium" ml={2} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Dates = ({ date }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {date.substring(0, 10).split("-").reverse().join("/")}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Status", accessor: "status", width: "10%", align: "left" },
      { Header: "Nome", accessor: "user", width: "10%", align: "left" },
      { Header: "Livro", accessor: "book", width: "10%", align: "left" },
      { Header: "Data de Emprestimo", accessor: "loanDt", width: "10%", align: "left" },
      { Header: "Data de Devolução", accessor: "returnDt", width: "10%", align: "left" },
    ],
    rows: Loans(),
  };
}

// {
//   status: (
//     <MDBox>
//       <MDBadge
//         badgeContent="Atraso"
//         color="error"
//         variant="gradient"
//         size="sm"
//         textAlign="left"
//       />
//     </MDBox>
//   ),
//   // TODO: Logo Será a capa do livro
//   user: "Guilherme Nono",
//   book: (
//     <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
//       {}----a
//     </MDTypography>
//   ),
//   course: (
//     <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
//       3º DS
//     </MDTypography>
//   ),
// },
