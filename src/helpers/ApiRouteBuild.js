import { APICONFIG } from "./apiConfig";

const buildUrl = () => {
  let url = `${APICONFIG.protocol}://${APICONFIG.baseDomain}:${APICONFIG.port}`;

  if (APICONFIG.context !== "") {
    url = `${url}/${APICONFIG.context}`;
  }

  return url;
};

const getServiceRoute = (service) => {
  let configService;
  if (service !== undefined) {
    const teste = APICONFIG.services.filter((config) => config.name === service);
    // eslint-disable-next-line prefer-destructuring
    configService = teste[0];
  } else {
    return "";
  }

  return configService.route;
};

const buildRoute = (service) => buildUrl().concat(getServiceRoute(service));

const urlFromRoute = (route) => buildUrl().concat(route);

export default {
  buildRoute,
  urlFromRoute,
};
