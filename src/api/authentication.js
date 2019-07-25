import { config } from "../config";
import { getAuthHeader } from "../utils/auth";
import { httpClient } from "./httpClient";

export const login = (email, password) => {
  const header = new Headers({
    "Content-Type": "application/json"
  });

  const body = {
    email,
    password
  };

  const options = {
    method: "POST",
    headers: header,
    body: JSON.stringify(body)
  };

  return httpClient(`${config.baseURL}users/login`, options);
};

export const validate = () => {
  const header = new Headers({
    authorization: getAuthHeader()
  });

  const options = {
    method: "GET",
    headers: header
  };

  return httpClient(`${config.baseURL}users/validate`, options);
};
