import ApiRouteBuild from "helpers/ApiRouteBuild";
import { useEffect, useState } from "react";
import Loan from "models/Loan.model";

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

  const getLibraryLoan = async (userToken, libId, filter = []) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const filters = [{ filterKey: "library", value: libId, operation: "eq" }];

    if (filter.length > 0) {
      filter.forEach((element) => {
        filters.push(element);
      });
    }

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

    const req = fetch(`${ApiRouteBuild.buildRoute("loan")}/search?pageSize=99999`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const loanList = [];
          resp.content.forEach((element) => {
            loanList.push(new Loan(element));
          });
          return loanList;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de livros.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const getLibraryLoanOfMonth = async (userToken, libId) => {
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

    const req = fetch(`${ApiRouteBuild.buildRoute("loan")}/${libId}/month`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const loanList = [];
          resp.forEach((element) => {
            loanList.push(new Loan(element));
          });
          return loanList;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de emprestimos.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const closeLoan = async (userToken, loanId) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestOptions = {
      method: "POST",
      headers,
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("loan")}/close/${loanId}`, requestOptions)
      .then((resp) => {
        if (resp.status === 204) {
          console.log("Deu certo");
        }
      })
      .catch(() => {
        setError("Ocorreu um erro durante a busca de emprestimos.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const renewalLoan = async (userToken, dateToReturn, borrowingId) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const bodyfoda = {
      dateToReturn,
      borrowingId,
    };

    const requestOptions = {
      method: "PATCH",
      headers,
      body: JSON.stringify(bodyfoda),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("loan")}/renewal`, requestOptions)
      .then((resp) => {
        if (resp.status === 204) {
          console.log("Deu certo");
        }
        return resp.status;
      })
      .catch(() => {
        setError("Ocorreu um erro durante a busca de emprestimos.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const createBorrowing = async (userToken, borrowingData) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const borrowingBody = {
      loanDate: borrowingData.loanDate,
      returnDate: borrowingData.returnDate,
      bookCode: borrowingData.bookCode,
      userId: borrowingData.userId,
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(borrowingBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("loan")}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create borrowing");
        }
      })
      .catch(() => {
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
    getLibraryLoan,
    getLibraryLoanOfMonth,
    closeLoan,
    createBorrowing,
    renewalLoan,
    loading,
    error,
  };
};

export default useLoan;
