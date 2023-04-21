function defaultHeader() {
  const auth = JSON.parse(localStorage.getItem("userAuthorization"));

  const header = {};
  if (auth && auth.token) {
    header.Authorization = `Bearer ${auth.token}`;
  }

  header["Access-Control-Allow-Origin"] = "*";
  header["Accept-Language"] = "pt-BR";

  return header;
}

export default defaultHeader;
