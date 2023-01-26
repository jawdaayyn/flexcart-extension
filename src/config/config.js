import axios from "axios";

const config = {
  timeout: 10000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:8080",
};

export const api = axios.create(config);
