import ApiRouteBuild from "helpers/ApiRouteBuild";
import handleResponse from "helpers/HandleResponse";
import { useEffect, useState } from "react";
import UserLib from "models/UserLib.model";
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

  const getUsersNotResgistred = async (userToken) => {
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
          const books = [];
          resp.forEach((element) => {
            books.push(new User(element));
          });
          return books;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de usuários.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const getAllLibUsers = async (userToken, libId, filter = []) => {
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
            users.push(new UserLib(element));
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

  const createUserDashboard = async (userToken, registerData) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const registerBody = {
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
      birthyDay: registerData.birthyDay,
      phone: registerData.phone,
      gender: registerData.gender,
      profileId: registerData.profileId,
      cpf: registerData.cpf,
      id: registerData.accountId,
      rmRa: registerData.rmRa,
      profilePicture: registerData.profilePicture,
      libProfileId: registerData.libProfileId,
      libId: registerData.libId,
      coursesId: registerData.coursesId,
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(registerBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("userLibrary")}`, requestOptions)
      .then(handleResponse)
      .then((user) => user)
      .catch(() => {
        setError("Dados incorretos.");
        setLoading(false);
        return null;
      });
    return req;
  };

  useEffect(() => {
    setCancelled(true);
  }, []);

  return {
    getUsersNotResgistred,
    getAllLibUsers,
    createUserDashboard,
    loading,
    error,
  };
};

export default useUsers;
