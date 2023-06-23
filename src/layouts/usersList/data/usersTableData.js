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
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images

export default async function data(users) {
  const Users = () => {
    if (users) {
      const resp = [];
      users.forEach((element) => {
        resp.push({
          accountActive: <IsActive isActive={element.account.active} />,
          userImg: <UserImg userImage={element.profilePicture} />,
          name: <UserName userName={element.account.personName} />,
          // Cursos precisa ficar dinamico
          course: (
            <Course
              courses={`${element.courses[0].module}° ${element.courses[0].name} ${element.courses[0].classroom} - ${element.courses[0].period}`}
            />
          ),
          eMail: <Email email={element.getEmail()} />,
          registerRmRa: <Register register={element.rmRa} />,
        });
      });
      return resp;
    }
    return [];
  };

  const IsActive = ({ isActive }) => (
    <MDBox>
      <MDBadge
        badgeContent={isActive ? "Ativo" : "Desativado"}
        color={isActive ? "success" : "error"}
        variant="gradient"
        size="sm"
        textAlign="left"
      />
    </MDBox>
  );

  const UserImg = ({ userImage }) => (
    <MDBox lineHeight={1}>
      <MDAvatar
        src={userImage}
        size="sm"
        sx={{
          borderRadius: "0",
          alignContent: "center",
          boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.19)",
        }}
      />
    </MDBox>
  );

  const Register = ({ register }) => (
    <MDBox lineHeight={1}>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {register}
      </MDTypography>
    </MDBox>
  );

  const UserName = ({ userName }) => (
    <MDBox lineHeight={1}>
      <MDBox lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {userName}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Course = ({ courses }) => (
    <MDBox lineHeight={1}>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {courses}
      </MDTypography>
    </MDBox>
  );

  const Email = ({ email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {email}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Avatar", accessor: "userImg", width: "1%", align: "left" },
      { Header: "Status da Conta", accessor: "accountActive", width: "5%", align: "center" },
      { Header: "Nome", accessor: "name", width: "5%", align: "center" },
      { Header: "RM/RA", accessor: "registerRmRa", width: "5%", align: "center" },
      { Header: "Curso", accessor: "course", width: "5%", align: "center" },
      { Header: "Email", accessor: "eMail", width: "5%", align: "center" },
    ],

    rows: Users(),
  };
}
