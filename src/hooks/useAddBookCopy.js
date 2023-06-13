import ApiRouteBuild from "helpers/ApiRouteBuild";
import { useState } from "react";

export const useAddBookCopy = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  return {
    addBookCopy,
    loading,
    error,
  };
};

export default useAddBookCopy;
