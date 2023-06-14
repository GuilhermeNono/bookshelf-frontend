import ApiRouteBuild from "helpers/ApiRouteBuild";
import Book from "models/Book.model";
import { useEffect, useState } from "react";

export const useBooks = () => {
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

  const getAllBooks = async (userToken) => {
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

    const req = fetch(`${ApiRouteBuild.buildRoute("book")}`, requestOptions)
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

  const addNewBook = async (userToken, bookData) => {
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
      body: JSON.stringify(bookData),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("book/add")}`, requestOptions)
      .then((data) => {
        setLoading(false);
        return data;
      })
      .catch(() => {
        setError("Ocorreu um erro ao tentar adicionar um livro.");
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
    getAllBooks,
    addNewBook,
    loading,
    error,
  };
};

export default useBooks;
