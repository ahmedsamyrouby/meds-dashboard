// COOKIES or LOCAL STORAGE

/* save obj to the local storage */
export const setAuthUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

/* gets object from the local storage */
export const getAuthUser = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  }
};

export const removeAuthUser = () => {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
};
