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
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const filters = [{ filterKey: "id", value: libId, operation: "eq" }];

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

  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    getLibraryBooks,
    loading,
    error,
  };
};

export default useLibrary;
