export default class Route {
  #type;

  #name;

  #key;

  #icon;

  #route;

  #ignoreNav;

  #component;

  #authorization;

  #profile;

  Type(type = "") {
    this.#type = type;
    return this;
  }

  Name(name = "") {
    this.#name = name;
    return this;
  }

  Key(key = "") {
    this.#key = key;
    return this;
  }

  Route(route = "") {
    this.#route = route;
    return this;
  }

  IgnoreNav(ignoreNav = false) {
    this.#ignoreNav = ignoreNav;
    return this;
  }

  Component(component) {
    this.#component = component;
    return this;
  }

  Authorization(authorization = "") {
    this.#authorization = authorization;
    return this;
  }

  Profile(profile = "") {
    this.#profile = profile;
    return this;
  }

  Icon(icon) {
    this.#icon = icon;
    return this;
  }

  get type() {
    return this.#type;
  }

  get name() {
    return this.#name;
  }

  get key() {
    return this.#key;
  }

  get icon() {
    return this.#icon;
  }

  get route() {
    return this.#route;
  }

  get ignoreNav() {
    return this.#ignoreNav;
  }

  get component() {
    return this.#component;
  }

  get authorization() {
    return this.#authorization;
  }

  get profile() {
    return this.#profile;
  }
}
