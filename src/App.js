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

// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useMemo, useLayoutEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
import MDHeader from "components/MDHeader";
import MDFooter from "components/MDFooter";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
// eslint-disable-next-line no-unused-vars
import routes from "routes";

// Material Dashboard 2 React contexts
import {
  useMaterialUIController,
  // eslint-disable-next-line no-unused-vars
  setMiniSidenav,
  // eslint-disable-next-line no-unused-vars
  setLibrary,
  // eslint-disable-next-line no-unused-vars
  setUserLogged,
} from "context";

import logo from "assets/images/logos/Logo.svg";
import { useAuthentication } from "hooks/useAuthentication";
// eslint-disable-next-line no-unused-vars
import PrivateRoute from "./components/ProtectedRouter/RouteBasedPermission";
// eslint-disable-next-line no-unused-vars
import UserLogged from "./models/UserLogged.model";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    // openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    // eslint-disable-next-line no-unused-vars
    userLogged,
    // eslint-disable-next-line no-unused-vars
    library: libraryContext,
    // routes,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [rtlCache, setRtlCache] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [alreadyUp, setAlreadyUp] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [bsLidState, setBsLidState] = useState(localStorage.getItem("bs-lid"));
  // eslint-disable-next-line no-unused-vars
  const { pathname } = useLocation();
  // const { hasPermission } = usePermission();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const authentication = useAuthentication();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // setRoutes(dispatch, routesFile);
    const token = localStorage.getItem("userAuthorization");
    const libInfo = localStorage.getItem("uid");
    const accountId = localStorage.getItem("aid");
    const accountProf = localStorage.getItem("aprof");
    const libraryId = localStorage.getItem("bs-lid");

    if (token && libInfo && accountId && libraryId) {
      // eslint-disable-next-line consistent-return
      authentication.validateToken(token).then((resp) => {
        if (resp === 200 && libraryId) {
          const libObj = JSON.parse(libInfo);
          const userLoggedIns = new UserLogged(token, accountId, libObj, accountProf);
          setUserLogged(dispatch, userLoggedIns);
          setLibrary(dispatch, libraryId);
          navigate("/dashboard");
        } else {
          setAlreadyUp(true);
          return localStorage.clear();
        }
      });
    } else {
      setAlreadyUp(true);
      return localStorage.clear();
    }
    setAlreadyUp(true);
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const libraryId = localStorage.getItem("bs-lid");
    if (libraryId) {
      return setLibrary(dispatch, libraryId);
    }
  }, [bsLidState]);

  // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (pathname.indexOf("/dashboard") === 0) {
  //     if (!userLogged) {
  //       navigate("/authentication/sign-in");
  //     }
  //   } else if (pathname.indexOf("/authentication") === 0) {
  //     if (userLogged) {
  //       navigate("/dashboard");
  //     }
  //   }
  // }, [pathname, userLogged]);

  // eslint-disable-next-line no-unused-vars
  // const teste = [];

  // useEffect(() => {
  //   if (alreadyUp && userLogged instanceof UserLogged) {
  //     try {
  //       if (userLogged.librariesAccount[0].userProfile) {
  //         const newRoutes = [];
  //         routes.forEach((route) => {
  //           const hasPermissionOnContext = hasPermission(route.authorization);
  //           if (hasPermissionOnContext) {
  //             newRoutes.push(route);
  //           }
  //         });
  //         // eslint-disable-next-line no-import-assign
  //         teste = newRoutes;
  //         // setRoutes(dispatch, newRoutes);
  //         setAlreadyUp(false);
  //       }
  //     } catch (error) {
  //
  //     }
  //   }
  // }, [alreadyUp]);

  const getRoutes = (allRoutes) =>
    // eslint-disable-next-line array-callback-return, consistent-return
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if (route.authorization) {
          return (
            <Route
              exact
              path={route.route}
              element={
                <PrivateRoute requiredPermission={route.authorization}>
                  {route.component}
                </PrivateRoute>
              }
            />
          );
        }
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  // const configsButton = (
  //   <MDBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.25rem"
  //     height="3.25rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="small" color="inherit">
  //       settings
  //     </Icon>
  //   </MDBox>
  // );

  return (
    alreadyUp &&
    (direction === "rtl" ? (
      <CacheProvider value={rtlCache}>
        <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? logo : logo}
                brandName="Bookshelf"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {/* {configsButton} */}
            </>
          )}
          {/* {layout === "vr" && <Configurator />} */}
          {layout === "home" && (
            <>
              <MDHeader />
              <Routes>
                {getRoutes(routes)}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
              <MDFooter />
            </>
          )}
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </ThemeProvider>
      </CacheProvider>
    ) : (
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? logo : logo}
              brandName="Bookshelf"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {/* {configsButton} */}
          </>
        )}
        {layout === "vr" && <Configurator />}
        {layout === "home" && (
          <>
            <MDHeader />
            <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
            <MDFooter />
          </>
        )}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    ))
  );
}
