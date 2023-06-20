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
import { Link } from "react-router-dom";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MDBadge from "../../../components/MDBadge";

export default async function data(loans) {
  const Loans = () => {
    if (loans) {
      const resp = [];
      loans.forEach((element) => {
        resp.push({
          status: <Status overdue={element.overdue} />,
          user: <Name name={element.userName} />,
          tombo: <Tombo idBook={element.bookId} />,
          book: <Book name={element.books} />,
          loanDt: <Dates date={element.loanDate} />,
          returnDt: <Dates date={element.returnDate} />,
          detLoans: <DetailLoans code={element.id} />,
        });
      });

      return resp;
    }
    return [];
  };

  const Status = ({ overdue }) => (
    <MDBox>
      <MDBadge
        badgeContent={overdue ? "Atraso" : "Em dia"}
        color={overdue ? "error" : "success"}
        variant="gradient"
        size="sm"
        textAlign="left"
      />
    </MDBox>
  );

  const Name = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Tombo = ({ idBook }) => (
    <MDTypography fontSize="1em" fontWeight="medium">
      {idBook}
    </MDTypography>
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

  const DetailLoans = ({ code }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        <MDTypography
          component={Link}
          to={`/dashboard/borrowing/#####/${code}`}
          variant="button"
          color="info"
          fontWeight="bold"
          fontSize="25px"
          textGradient
        >
          <ArticleOutlinedIcon style={{ marginLeft: "0.5em" }} color="white" />
        </MDTypography>
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Status", accessor: "status", width: "1%", align: "center" },
      { Header: "Nome", accessor: "user", width: "10%", align: "center" },
      { Header: "Tombo", accessor: "tombo", width: "10%", align: "center" },
      { Header: "Livro", accessor: "book", width: "10%", align: "center" },
      { Header: "Data de Emprestimo", accessor: "loanDt", width: "10%", align: "center" },
      { Header: "Data de Devolução", accessor: "returnDt", width: "10%", align: "center" },
      { Header: "Detalhes", accessor: "detLoans", width: "10%", align: "center" },
    ],
    rows: Loans(),
  };
}
