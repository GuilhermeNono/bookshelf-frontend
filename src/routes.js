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

/**
 All of the routes for the Material Dashboard 2 React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Sidenav.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `type` key with the `collapse` value is used for a route.
 2. The `type` key with the `title` value is used for a title inside the Sidenav.
 3. The `type` key with the `divider` value is used for a divider between Sidenav items.
 4. The `name` key is used for the name of the route on the Sidenav.
 5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
 6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
 7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 8. The `route` key is used to store the route location which is used for the react router.
 9. The `href` key is used to store the external links location.
 10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
 10. The `component` key is used to store the component of its route.
 */

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Tables from "layouts/tables";
// import Billing from "layouts/billing";
// import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import UserList from "layouts/usersList";

// @mui icons
import Icon from "@mui/material/Icon";
import Home from "layouts/home";
import Pricing from "layouts/pricing";
import Books from "layouts/books";
import AddCopy from "layouts/add-copy";
import AddBook from "layouts/add-book";
import LoansDetails from "layouts/loansDetails";
import NotFoundPage from "layouts/not-found";
import {
  ROLE_LIBRARY_ADMIN,
  PERM_BOOKSHELF_LIB_LOAN,
  PERM_BOOKSHELF_LIB_BOOKS_DETAIL,
  PERM_BOOKSHELF_LIB_PROFILE,
  PERM_BOOKSHELF_LIB_BOOKS_BOOK_ADD,
  PERM_BOOKSHELF_LIB_BOOKS,
  PERM_BOOKSHELF_LIB_BOOKS_COPY_ADD,
} from "helpers/auth/Permisions";
import Converter from "util/Converter";
import Borrowing from "./layouts/borrowing";
import Details from "./layouts/details";

const routesJson = [
  {
    type: "blocked",
    name: "notFound",
    key: "notFound",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/*",
    ignoreNav: true,
    component: <NotFoundPage />,
    authorization: null,
    profile: null,
  },
  {
    type: "blocked",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    ignoreNav: true,
    component: <Home />,
    authorization: null,
    profile: null,
  },
  {
    type: "blocked",
    name: "pricing",
    key: "pricing",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/pricing",
    ignoreNav: true,
    component: <Pricing />,
    authorization: null,
    profile: null,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard_user",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    authorization: null,
    profile: null,
  },
  {
    type: "collapse",
    name: "Books",
    key: "books",
    icon: <Icon fontSize="small">collections_bookmark</Icon>,
    route: "/dashboard/books",
    component: <Books />,
    authorization: PERM_BOOKSHELF_LIB_BOOKS,
    profile: null,
  },
  {
    type: "blocked",
    name: "AddCopy",
    key: "AddCopy",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/add-copy",
    component: <AddCopy />,
    authorization: PERM_BOOKSHELF_LIB_BOOKS_COPY_ADD,
    profile: null,
  },
  {
    type: "blocked",
    name: "AddBook",
    key: "AddBook",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/add-book",
    component: <AddBook />,
    authorization: PERM_BOOKSHELF_LIB_BOOKS_BOOK_ADD,
    profile: null,
  },
  {
    type: "collapse",
    name: "Loan",
    key: "loan",
    icon: <Icon fontSize="small">book</Icon>,
    route: "/dashboard/loan",
    component: <Borrowing />,
    authorization: PERM_BOOKSHELF_LIB_LOAN,
    profile: ROLE_LIBRARY_ADMIN,
  },
  {
    type: "title",
    name: "LoansDetails",
    key: "loansDetails",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/borrowing/loansDetails/:loanId",
    authorization: PERM_BOOKSHELF_LIB_LOAN,
    component: <LoansDetails />,
    profile: null,
  },
  {
    type: "blocked",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    authorization: null,
    profile: null,
  },
  {
    type: "blocked",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    authorization: null,
    profile: null,
  },
  {
    type: "blocked",
    name: "Details",
    key: "details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/books/details/:libId",
    component: <Details />,
    authorization: PERM_BOOKSHELF_LIB_BOOKS_DETAIL,
    profile: null,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/dashboard/profile",
    component: <Profile />,
    authorization: PERM_BOOKSHELF_LIB_PROFILE,
    profile: null,
  },
  // {
  //   type: "title",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/dashboard/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "title",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/dashboard/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "title",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "/dashboard/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "UserList",
    key: "userList",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/userList",
    component: <UserList />,
  },
  {
    type: "divider",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "title",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "title",
    name: "Details",
    key: "details",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/dashboard/books/details/:libId",
    component: <Details />,
  },
  /**
   * Colapse -> Deixa visivel
   * Divider -> Deixar visivel incluindo um divisor embaixo dele
   * title -> Esconde da Sidebar
   * */

  // http://localhost:8000/dashboard/books/detail/1475
];

const routes = Converter.JsonRouteToRoutObject(routesJson);

export default routes;
