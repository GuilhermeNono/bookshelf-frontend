import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useMaterialUIController } from "context";
import { useAuthentication } from "hooks/useAuthentication";
import { ROLE_BOOKSHELF_SYS_ADMIN } from "helpers/auth/Permisions";
import hasPermission from "./hasPermission";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ requiredPermission, children }) {
  const [controller] = useMaterialUIController();
  const { library, userLogged } = controller;
  const { logOut } = useAuthentication();

  const userAuthorization = localStorage.getItem("userAuthorization");
  if (!userAuthorization) {
    return <Navigate to="/authentication/sign-in" />;
  }

  if (requiredPermission) {
    // eslint-disable-next-line no-unused-vars
    const doNotHavePermission = !hasPermission(requiredPermission, library);

    if (doNotHavePermission) {
      if (userLogged.accountProfile !== ROLE_BOOKSHELF_SYS_ADMIN) {
        logOut();
        return <Navigate to="/authentication/sign-in" replace />;
      }
    }
  }

  // eslint-disable-next-line no-unneeded-ternary
  return children ? children : <Outlet />;
}
