import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";

export const useRole = () => {
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
  const hasRole = (role) => {
    checkIfIsCancelled();
    checkUserLogged();
    if (role === null) {
      return false;
    }

    try {
      let userLibrary;
      const libraries = userLogged.librariesAccount;

      let returnVariable = false;

      if (userLogged) {
        if (Array.isArray(libraries)) {
          libraries.forEach((lib) => {
            if (lib.id === Number(library)) {
              userLibrary = lib;
            }
          });

          if (!userLibrary) {
            return false;
          }

          const profile = userLibrary.userProfile;

          // eslint-disable-next-line consistent-return
          if (profile.nameProfile === role) {
            returnVariable = true;
          }
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
    hasRole,
  };
};

export default useRole;
