import axios from "axios";

export function updateAccessTokenHeader(user) {
  if (user) {
    axios.defaults.headers.common = {
      "x-access-token": user.token,
    };
  }
}

export const signInApi = axios.create({
  baseURL: "/api/signup",
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
});

export const signUpApi = axios.create({
  baseURL: "/api/signup",
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
});
