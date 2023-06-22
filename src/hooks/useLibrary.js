import ApiRouteBuild from "helpers/ApiRouteBuild";
import Book from "models/Book.model";
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
    const filters = [{ filterKey: "id", value: libId, operation: "eq" }];
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

    if (filter.length > 0) {
      filter.forEach((fl) => {
        filters.push(fl);
      });
    }

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
    const filters = [{ filterKey: "id", value: libId, operation: "eq" }];
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

    if (filter.length > 0) {
      filter.forEach((fl) => {
        filters.push(fl);
      });
    }

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

  const getAllUsers = (userToken, searchValue = "") => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestBody = {
      dataOption: "all",
      searchCriteriaList: [
        {
          filterKey: "name",
          operation: "cn",
          value: searchValue,
        },
      ],
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    return (
      fetch(`${ApiRouteBuild.buildRoute("library")}/search`, requestOptions)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Ocorreu um erro ao buscar os usuários.");
        })
        .then((data) => {
          const users = data.map((user) => ({
            userLibId: user.userLibId,
            rmRa: user.rmRa,
            profilePicture: user.profilePicture,
            active: user.active,
            account: {
              id: user.account.id,
              active: user.account.active,
              personName: user.account.personName,
              userContact: user.account.userContact,
            },
          }));
          setLoading(false);
          return users;
        })
        // eslint-disable-next-line no-shadow
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          return null;
        })
    );
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
    loading,
    error,
  };
};

export default useLibrary;
