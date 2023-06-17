import { useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useInitial = () => {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState({
    loading: false,
    error: false,
  });
  /*
        Implement hook functionality here.
        If you need to execute async operation, set loading to true and when it's over, set loading to false.
        If you caught some errors, set error status to true.
        Initial hook is considered to be successfully completed if it will return {loading: false, error: false}.
      */
  return status;
};
