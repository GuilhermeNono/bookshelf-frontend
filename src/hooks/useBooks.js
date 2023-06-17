import ApiRouteBuild from "helpers/ApiRouteBuild";
import Book from "models/Book.model";
import { useEffect, useState } from "react";

export const useBooks = () => {
  // const [isLogged, setIsLogged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  const addBookCopy = async (userToken, bookId, libId, userId, code) => {
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const requestBody = {
      bookId,
      libId,
      userId,
      code,
    };
    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("library")}/book/add`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to add book copy");
      })
      .catch(() => {
        setError("Ocorreu um erro ao adicionar uma cópia do livro.");
        setLoading(false);
        return null;
      });

    return req;
  };

  // const addNewBook = (Parametro1, Parametro2) => {
  const addNewBook = (userToken, bookData) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    };

    const bookBody = {
      name: bookData.name,
      language: bookData.language,
      publicationDate: bookData.publicationDate,
      isbn: bookData.isbn,
      sinopse: bookData.sinopse,
      edition: bookData.edition,
      capeType: bookData.capeType,
      numberPages: bookData.numberPages,
      cape: bookData.cape,
      publisher: bookData.publisher,
      categories: bookData.categories,
      authors: bookData.authors,
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(bookBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("book")}/add`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add new book");
        }
        return response.json();
      })
      .catch(() => {
        setError("Ocorreu um erro ao adicionar um novo livro.");
        setLoading(false);
        return null;
      });

    return req;
  };

  const getAllCategories = async () => {
    setLoading(true);
    setError(null);

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("category")}`, requestOptions)
      .then((response) => response.json())
      .then((data) => data)
      .catch(() => {
        setError("Ocorreu um erro durante a busca das categorias.");
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
    addBookCopy,
    addNewBook,
    loading,
    getAllCategories,
    error,
  };
};

export default useBooks;
