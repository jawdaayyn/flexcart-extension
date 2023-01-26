import { api } from "./config";

export const apiAuthentication = async ({ email, password }) => {
  return api
    .post("/users/signin", {
      email,
      password,
    })
    .then((response) => response.data.message);
};
