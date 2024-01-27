import axios from "axios";

const API = axios.create({
  baseURL: "http://122.34.57.9:5343/",
});

export default API;
