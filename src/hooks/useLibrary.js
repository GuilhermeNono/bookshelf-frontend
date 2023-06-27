import ApiRouteBuild from "helpers/ApiRouteBuild";
import Book from "models/Book.model";
import User from "models/User.model";
import { useEffect, useState } from "react";

export const useLibrary = () => {
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

  const getLibraryBooks = async (userToken, libId, filter = []) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    const filters = [{ filterKey: "id", value: libId, operation: "eq" }];
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

    const req = fetch(`${ApiRouteBuild.buildRoute("library")}/books/search`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const books = [];
          resp.content.forEach((element) => {
            books.push(new Book(element));
          });
          return books;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de livros.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const getLibraryBooksNoLimit = async (userToken, libId, filter = []) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    const filters = [{ filterKey: "id", value: libId, operation: "eq" }];
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

    const req = fetch(
      `${ApiRouteBuild.buildRoute("library")}/books/search?pageSize=99999`,
      requestOptions
    )
      .then((obj) =>
        obj.json().then((resp) => {
          const books = [];
          resp.content.forEach((element) => {
            books.push(new Book(element));
          });
          return books;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de livros.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const getLibraryBooksOfMonth = async (userToken, libId) => {
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

    const req = fetch(`${ApiRouteBuild.buildRoute("library")}/${libId}/books/month`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const books = [];
          resp.forEach((element) => {
            books.push(new Book(element));
          });
          return books;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca de livros.");
        setLoading(false);
        return null;
      });
    return req;
  };

  const getAllUsers = (userToken, filter = []) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    const filters = [{ filterKey: "name", value: "", operation: "cn" }];
    if (filter.length > 0) {
      console.log("🚀 ~ file: useLibrary.js:153 ~ getAllUsers ~ filter:", filter);

      filter.forEach((element) => {
        filters.push(element);
      });
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestBody = {
      searchCriteriaList: filters,
      dataOption: "all",
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("user")}/library/search`, requestOptions)
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

  const deleteCopy = (userToken, copyID) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestOptions = {
      method: "DELETE",
      headers,
      body: JSON.stringify({
        libCode: copyID,
      }),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("library")}/book/${copyID}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the copy.");
        }
        return true;
      })
      .catch(() => {
        setError("An error occurred while deleting the copy.");
        return false;
      })
      .finally(() => {
        setLoading(false);
      });
    return req;
  };

  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    getLibraryBooks,
    getLibraryBooksOfMonth,
    getLibraryBooksNoLimit,
    getAllUsers,
    deleteCopy,
    loading,
    error,
  };
};

export default useLibrary;
