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
          accountActive: <IsActive isActive={element.userAccount.active} />,
          userImg: <UserImg userImage={element.userImage} />,
          name: <UserName userName={element.userAccount.personName} />,
          course: <Course courses={element.userCourses} />,
          registerRmRa: <Register register={element.rmRa} />,
        });
        console.log(element.userCourses[0]);
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
    <MDBox display="flex" alignItems="center" lineHeight={1}>
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

  const UserName = ({ userName }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {userName}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Course = ({ courses }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {courses}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Register = ({ register }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {register}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Status da Conta", accessor: "accountActive", width: "10%", align: "left" },
      { Header: "Avatar", accessor: "userImg", width: "10%", align: "left" },
      { Header: "Nome", accessor: "name", width: "10%", align: "left" },
      { Header: "Curso", accessor: "course", width: "10%", align: "left" },
      { Header: "RM/RA", accessor: "registerRmRa", width: "10%", align: "left" },
    ],

    rows: Users(),
  };
}
