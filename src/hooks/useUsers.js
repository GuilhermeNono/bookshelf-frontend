import ApiRouteBuild from "helpers/ApiRouteBuild";
import { useEffect, useState } from "react";
import User from "models/User.model";

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

  const getAllUsers = async (userToken, libId, filter = []) => {
    const filters = [{ filterKey: "library", value: libId, operation: "eq" }];
    if (filter.length > 0) {
      filter.forEach((element) => {
        filters.push(element);
      });
    }
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const libraryBody = {
      searchCriteriaList: filters,
      dataOption: "all",
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(libraryBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("userLibrary")}/search`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const users = [];
          resp.content.forEach((element) => {
            users.push(new User(element));
          });
          return users;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de livros.");
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
