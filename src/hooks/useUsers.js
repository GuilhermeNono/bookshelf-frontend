import ApiRouteBuild from "helpers/ApiRouteBuild";
import User from "models/User.model";
import { useEffect, useState } from "react";

export const useUsers = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  // const [isLogged, setIsLogged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  const getAllUsers = async (userToken) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestOptions = {
      method: "GET",
      headers,
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("user")}`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const users = [];
          resp.forEach((element) => {
            users.push(new User(element));
          });
          return users;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de usuarios.");
        setLoading(false);
        return null;
      });
    return req;
  };

  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    getAllUsers,
    loading,
    error,
  };
};

export default useUsers;
