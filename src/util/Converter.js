import Route from "models/Routes.model";

export default class Converter {
  static JsonRouteToRoutObject(jsonRoute) {
    const routes = [];
    jsonRoute.forEach((route) => {
      routes.push(
        new Route()
          .Name(route.name)
          .Type(route.type)
          .Key(route.key)
          .Icon(route.icon)
          .Route(route.route)
          .IgnoreNav(route.ignoreNav)
          .Component(route.component)
          .Authorization(route.authorization)
          .Profile(route.profile)
      );
    });
    return routes;
  }

  static RouteObjectToJsonRoute(routeObj) {
    const routes = [];
    routeObj.forEach((route) => {
      routes.push({
        type: route.type,
        name: route.name,
        key: route.key,
        icon: route.icon,
        route: route.route,
        ignoreNav: route.ignoreNav,
        component: route.component,
        authorization: route.authorization,
        profile: route.profile,
      });
    });
    return routes;
  }
}
