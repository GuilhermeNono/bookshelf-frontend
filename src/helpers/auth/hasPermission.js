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
      return false;
    }

    let userLibrary;
    console.log("🚀 ~ file: hasPermission.js:34 ~ hasPermission ~ userLogged:", userLogged);
    const libraries = userLogged.librariesAccount;

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
        const { permissions } = profile;
        console.log("🚀 ~ file: hasPermission.js:49 ~ hasPermission ~ profile:", profile);
        console.log(
          "🚀 ~ file: hasPermission.js:49 ~ hasPermission ~ permissions:",
          profile.permissions
        );

        // eslint-disable-next-line consistent-return
        permissions.forEach((perm) => {
          console.log("entrando");
          if (perm.code === permission) {
            return true;
          }
        });
      }
    }
    return false;
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
