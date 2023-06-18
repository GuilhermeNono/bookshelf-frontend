import ApiRouteBuild from "helpers/ApiRouteBuild";

export const getPerm = (token, profileId) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const requestOptions = {
    method: "GET",
    headers,
  };

  const req = fetch(`${ApiRouteBuild.buildRoute("libProfile")}/${profileId}`, requestOptions).then(
    (resp) => resp.json()
  );

  return req;
};

export default getPerm;
