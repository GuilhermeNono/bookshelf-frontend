import ApiRouteBuild from "helpers/ApiRouteBuild";
import Course from "models/Course.model";
import { useEffect, useState } from "react";

const useCourse = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  // const [isLogged, setIsLogged] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cancelled, setCancelled] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  const getLibaryCourses = (userToken, libId, filter = []) => {
    const filters = [{ filterKey: "library", value: libId, operation: "eq" }];
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

    const requestBody = {
      searchCriteriaList: filters,
      dataOption: "all",
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const req = fetch(`${ApiRouteBuild.buildRoute("course")}/search`, requestOptions)
      .then((obj) =>
        obj.json().then((resp) => {
          const courses = [];
          resp.content.forEach((element) => {
            courses.push(new Course(element));
          });
          return courses;
        })
      )
      .catch(() => {
        setError("Ocorreu um erro durante a busca dos cursos.");
        setLoading(false);
        return null;
      });
    return req;
  };

  useEffect(() => {}, []);

  return { loading, error, getLibaryCourses };
};

export default useCourse;
