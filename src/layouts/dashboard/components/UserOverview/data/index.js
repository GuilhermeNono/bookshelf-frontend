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
import MDBadge from "../../../../../components/MDBadge";

export default async function data(loanList) {
  const Status = ({ isActive, overdue }) => {
    const statusIfOverdue = overdue ? "Atraso" : "Em dia";
    return (
      <MDBox>
        <MDBadge
          badgeContent={isActive ? statusIfOverdue : "FINALIZADO"}
          // eslint-disable-next-line no-nested-ternary
          color={isActive ? (overdue ? "error" : "success") : "secondary"}
          variant="gradient"
          size="sm"
          textAlign="left"
        />
      </MDBox>
    );
  };

  const LoanBook = ({ book }) => (
    <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
      {book.length > 35 ? `${book.substring(0, 35)}...` : book}
    </MDTypography>
  );

  const UserCourse = ({ course }) => (
    <MDTypography variant="caption" color="text" fontWeight="medium" textAlign="left">
      {course}
    </MDTypography>
  );

  const handleLoanListRows = () => {
    const loanListRows = [];
    if (loanList.length > 0) {
      // eslint-disable-next-line no-plusplus
      if (loanList.length > 6) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 6; i++) {
          loanListRows.push({
            status: <Status isActive={loanList[i].active} overdue={loanList[i].overdue} />,
            user: loanList[i].userName,
            book: <LoanBook book={loanList[i].books} />,
            course: (
              <UserCourse
                course={`°${loanList[i].courses[0].module} ${loanList[i].courses[0].name}`}
              />
            ),
          });
        }
      } else {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < loanList.length; i++) {
          loanListRows.push({
            status: <Status isActive={loanList[i].active} overdue={loanList[i].overdue} />,
            user: loanList[i].userName,
            book: <LoanBook book={loanList[i].books} />,
            course: (
              <UserCourse
                course={`°${loanList[i].courses[0].module} ${loanList[i].courses[0].name} ${loanList[i].courses[0].class}`}
              />
            ),
          });
        }
      }
    }
    return loanListRows;
  };

  return {
    columns: [
      { Header: "Status", accessor: "status", width: "10%", align: "left" },
      { Header: "Nome", accessor: "user", width: "10%", align: "left" },
      { Header: "Livro", accessor: "book", width: "10%", align: "left" },
      { Header: "Curso", accessor: "course", width: "10%", align: "right" },
    ],

    rows: handleLoanListRows(),
  };
}
