import axios from "axios";

const url = "https://flatearth-api.herokuapp.com";
const GENERAL_PREFIX = "/api/v1/auth";
const LOGIN_PREFIX = "/login";
const SIGN_UP_PREFIX = "/signup";
const SECRET_PREFIX = "/secret";

const http = axios.create({
  baseURL: `${url}${GENERAL_PREFIX}`
});

export const loginRequest = data => {
  return http.post(LOGIN_PREFIX, data);
};

export const signupRequest = data => {
  return http.post(SIGN_UP_PREFIX, data);
};

export const getUsersRequest = token => {
  return http.get(SECRET_PREFIX, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
