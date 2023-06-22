export const APICONFIG = {
  protocol: `${process.env.REACT_APP_PROTOCOL}`,
  baseDomain: `${process.env.REACT_APP_URL_BASE_DOMAIN}`,
  port: `${process.env.REACT_APP_URL_PORT}`,
  context: "",
  services: [
    {
      name: "authentication",
      route: "/api/v1/authentication",
    },
    {
      name: "user",
      route: "/api/v1/user",
    },
    {
      name: "library",
      route: "/api/v1/library",
    },
    {
      name: "book",
      route: "/api/v1/book",
    },
    {
      name: "author",
      route: "/api/v1/author",
    },
    {
      name: "category",
      route: "/api/v1/category",
    },
    {
      name: "loan",
      route: "/api/v1/borrowing",
    },
    {
      name: "libProfile",
      route: "/api/v1/library/profile",
    },
    {
      name: "userLibrary",
      route: "/api/v1/user/library",
    },
  ],
};

export default APICONFIG;
