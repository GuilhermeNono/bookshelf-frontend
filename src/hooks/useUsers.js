import ApiRouteBuild from "helpers/ApiRouteBuild";
import handleResponse from "helpers/HandleResponse";
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

  const createUserDashboard = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    birthyDay,
    phone,
    gender,
    profileId,
    cpf,
    rmRa,
    profilePicture,
    libProfileId,
    libId,
    coursesId
  ) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    // header da requisição
    const headers = {
      "Content-Type": "application/json",
    };

    // Json da requisição

    const registerBody = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      birthyDay,
      phone,
      gender,
      profileId,
      cpf,
      rmRa,
      profilePicture,
      libProfileId,
      libId,
      coursesId,
    };

    // Montando a requisição

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(registerBody),
    };

    // Executando requisição

    const req = fetch(`${ApiRouteBuild.buildRoute("userLibrary")}`, requestOptions)
      // Convertendo string para json
      .then(handleResponse)
      // Manipulando json de resposta
      .then((user) => user)
      // Tratativa de erro
      .catch(() => {
        setError("Dados incorretos.");
        setLoading(false);
        return null;
      });
    // Retornando resultado
    return req;
  };

  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    getAllUsers,
    createUserDashboard,
    loading,
    error,
  };
};

export default useUsers;
