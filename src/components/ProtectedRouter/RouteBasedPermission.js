import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useMaterialUIController } from "context";
import { useAuthentication } from "hooks/useAuthentication";
import hasPermission from "./hasPermission";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ requiredPermission, children }) {
  const [controller] = useMaterialUIController();
  const { library } = controller;
  const { logOut } = useAuthentication();

  const userAuthorization = localStorage.getItem("userAuthorization");
  if (!userAuthorization) {
    return <Navigate to="/authentication/sign-in" />;
  }

  if (requiredPermission) {
    // eslint-disable-next-line no-unused-vars
    const doNotHavePermission = !hasPermission(requiredPermission, library);
    console.log(doNotHavePermission);
    if (doNotHavePermission) {
      logOut();
      return <Navigate to="/authentication/sign-in" replace />;
    }
  }

  // eslint-disable-next-line no-unneeded-ternary
  return children ? children : <Outlet />;
}
