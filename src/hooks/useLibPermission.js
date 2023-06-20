import { useMaterialUIController } from "context";
import ApiRouteBuild from "helpers/ApiRouteBuild";
import { useEffect, useState } from "react";

export const useLibPermission = () => {
  const [cancelled, setCancelled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  // eslint-disable-next-line no-unused-vars
  const { userLogged, library } = controller;

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const checkUserLogged = () => {
    if (!userLogged) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  // eslint-disable-next-line consistent-return
  const getPerm = (token) => {
    checkIfIsCancelled();
    checkUserLogged();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const requestOptions = {
      method: "GET",
      headers,
    };

    try {
      const req = fetch(`${ApiRouteBuild.buildRoute("libProfile")}`, requestOptions).then((resp) =>
        resp.json()
      );
      return req;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    getPerm,
  };
};

export default useLibPermission;
