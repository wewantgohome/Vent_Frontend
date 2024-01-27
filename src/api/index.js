import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const API = axios.create({
  baseURL: "http://122.34.57.9:5343/",
  headers: {
    accessToken: cookies.get("accessToken"),
  },
});

axios.interceptors.request.use((config) => {});

export default API;
