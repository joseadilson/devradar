import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.237.68:3333"
});

export default api;
