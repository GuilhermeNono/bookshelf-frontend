// import handleResponse from "helpers/HandleResponse";
import { useMaterialUIController, setToken } from "context";
import handleResponse from "helpers/HandleResponse";
import { BehaviorSubject } from "rxjs";
import { useEffect, useState } from "react";
// import defaultHeader from "../helpers/HeaderHelp";
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
  const { token } = controller;

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  const checkIfIsAlreadyLogged = () => {
    if (token) {
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
      .then((user) => {
        localStorage.setItem("userAuthorization", JSON.stringify(user));
        currentUserSubject.next(user);

        // setToken(dispatch, user.token);
        setError(null);
        setLoading(false);
        console.log(user.token);
        setToken(dispatch, user.token);
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
      .then((user) => {
        console.log(user);

        return user;
      })
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

  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    loginUser,
    createUser,
    validateToken,
    error,
    loading,
  };
};

export default useAuthentication;
