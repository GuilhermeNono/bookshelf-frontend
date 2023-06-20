import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";

export const usePermission = () => {
  const [cancelled, setCancelled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [controller, dispatch] = useMaterialUIController();
  const { userLogged, library } = controller;

  const checkIfIsCancelled = () => {
    if (cancelled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  const checkUserLogged = () => {
    if (!userLogged) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  };

  // eslint-disable-next-line consistent-return
  const hasPermission = (permission) => {
    checkIfIsCancelled();
    checkUserLogged();
    if (permission === null) {
      return true;
    }

    try {
      let userLibrary;
      const libraries = userLogged.librariesAccount;

      let returnVariable = false;

      if (userLogged) {
        console.log("🚀 ~ file: hasPermission.js:40 ~ hasPermission ~ userLogged:", userLogged);
        if (Array.isArray(libraries)) {
          libraries.forEach((lib) => {
            if (lib.libraryId === Number(library)) {
              userLibrary = lib;
            }
            console.log("🚀 ~ file: hasPermission.js:45 ~ libraries.forEach ~ lib:", lib);
          });

          if (!userLibrary) {
            return false;
          }

          const { permissions } = userLibrary;

          // eslint-disable-next-line consistent-return
          permissions.forEach((perm) => {
            if (perm.code === permission) {
              returnVariable = true;
            }
          });
        }
      }
      return returnVariable;
    } catch (error) {
      return false;
    }
  };
  useEffect(() => {
    setCancelled(true);
    // setError("");
  }, []);

  return {
    hasPermission,
  };
};

export default usePermission;
