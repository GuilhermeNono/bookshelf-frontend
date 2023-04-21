export const APICONFIG = {
  protocol: "http",
  //   baseDomain: "192.168.1.4",
  baseDomain: "localhost",
  port: "8080",
  context: "",
  // context: "homloggi",
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
      route: "/api/v1/library"
    },
  ],
};

export default APICONFIG;
