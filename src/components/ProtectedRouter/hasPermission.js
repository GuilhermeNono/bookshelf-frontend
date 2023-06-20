const hasPermission = (permission, library) => {
  console.log("🚀 ~ file: hasPermission.js:2 ~ hasPermission ~ library:", library);
  console.log("🚀 ~ file: hasPermission.js:2 ~ hasPermission ~ permission:", permission);
  const requiredPermission = permission;
  const currentLib = Number(library);
  let has = false;

  if (!requiredPermission) return false;
  if (!currentLib) return false;

  const libraries = JSON.parse(localStorage.getItem("uid"));

  libraries.forEach((lib) => {
    if (lib.libraryId === currentLib) {
      lib.permissions.forEach((perm) => {
        if (perm.code === requiredPermission) {
          has = true;
        }
      });
    }
  });

  return has;
};

export default hasPermission;
