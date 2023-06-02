import ApiRouteBuild from "helpers/ApiRouteBuild";
import Loan from "models/Loan.model";
import { useEffect, useState } from "react";

export const useLoan = () => {
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

  const getAllLoans = async (userToken) => {
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

    const req = fetch(`${ApiRouteBuild.buildRoute("borrowing")}`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const loans = [];
          resp.forEach((element) => {
            loans.push(new Loan(element));
          });
          return loans;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de emprestimos.");
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
    getAllLoans,
    loading,
    error,
  };
};

export default useLoan;
