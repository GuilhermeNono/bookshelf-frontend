/* eslint-disable import/no-unresolved */
// import handleResponse from "helpers/HandleResponse";
import { useMaterialUIController, setUserLogged } from "context";
import handleResponse from "helpers/HandleResponse";
import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";
// import defaultHeader from "../helpers/HeaderHelp";
import UserLogged from "models/UserLogged.model";
import UserLibrary from "models/UserLibrary.model";
import UserLibraryProfile from "models/UserLibraryProfile.model";
import ApiRouteBuild from "../helpers/ApiRouteBuild";

export const useAuthentication = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  // const [isLogged, setIsLogged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  const { userLogged } = controller;

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  const checkIfIsAlreadyLogged = () => {
    if (userLogged) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  // Login - Sign in
  // eslint-disable-next-line consistent-return
  const loginUser = (email, password) => {
    checkIfIsCancelled();
    checkIfIsAlreadyLogged();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
    };
    const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

    const loginBody = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(loginBody),
    };

    const req = fetch(ApiRouteBuild.buildRoute("authentication"), requestOptions)
      .then(handleResponse)
      .then(async (user) => {
        const bslid = user.librariesAccount[0].libraryId ? user.librariesAccount[0].libraryId : 0;

        localStorage.setItem("userAuthorization", user.token);
        localStorage.setItem("uid", JSON.stringify(user.librariesAccount));
        localStorage.setItem("bs-lid", JSON.stringify(bslid));
        localStorage.setItem("aid", JSON.stringify(user.accountId));

        currentUserSubject.next(user.token);

        const userLoggedInstance = new UserLogged(user.token, user.accountId);

        user.librariesAccount.forEach(async (lib) => {
          const userLibProfInstance = new UserLibraryProfile(lib.profile);

          const userLibInstance = new UserLibrary(lib.libraryId, lib.library, lib.userLibraryId);

          userLibInstance.userProfile = userLibProfInstance;
          userLibInstance.userLogged = userLoggedInstance;
          userLibProfInstance.userLibrary = userLibInstance;
          userLoggedInstance.librariesAccount = userLibInstance;

          await userLibProfInstance.getAllProfileData();
        });

        // setToken(dispatch, user.token);
        setError(null);
        setLoading(false);
        setUserLogged(dispatch, userLoggedInstance);
        return user;
      })
      .catch(() => {
        setError("Email e/ou senha incorretos.");
        setLoading(false);
        return null;
      });

    return req;
  };

  const createUser = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    birthDay,
    phone,
    gender,
    profileId,
    cpf
  ) => {
    checkIfIsCancelled();
    checkIfIsAlreadyLogged();
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
      birthDay,
      phone,
      gender,
      profileId,
      cpf,
    };

    // Montando a requisição

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(registerBody),
    };

    // Executando requisição

    const req = fetch(ApiRouteBuild.buildRoute("user"), requestOptions)
      // Convertendo string para json
      .then(handleResponse)
      // Manipulando json de resposta
      .then((user) => user)
      // Tratativa de erro
      .catch(() => {
        setError("Email e/ou senha incorretos.");
        setLoading(false);
        return null;
      });
    // Retornando resultado
    return req;
  };

  const validateToken = (userToken) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestOptions = {
      method: "POST",
      headers,
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("authentication")}/validate`, requestOptions)
      .then((resp) => resp.status)
      .catch(() => {
        setError("Ocorreu um erro durante a execução da validação.");
        setLoading(false);
        return null;
      });

    return req;
  };

  const userData = (userToken) => {
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

    const req = fetch(`${ApiRouteBuild.buildRoute("authentication")}/me`, requestOptions)
      .then((resp) => resp.json())
      .then((a) => a)
      .catch(() => {
        setError("Ocorreu um erro durante a execução da validação.");
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
    loginUser,
    createUser,
    validateToken,
    userData,
    error,
    loading,
  };
};

export default useAuthentication;
