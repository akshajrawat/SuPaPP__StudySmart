import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://supapp-ou6l.onrender.com/SuPaPP",
  withCredentials: true,
});
