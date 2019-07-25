import { validate } from "../api/authentication";

export const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.token ? `Bearer ${user.token}` : "";
};

export const validateUser = () => {
  validate().then(json => {
    if (!json.success) {
      localStorage.removeItem("user");
    }
  });
};

export const isLogin = () => {
  if (localStorage.getItem("user")) {
    return true;
  }

  return false;
};
