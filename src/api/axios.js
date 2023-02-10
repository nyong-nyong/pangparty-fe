import axios from "axios";

const instance = axios.create({
  baseURL: "http://i8A306.p.ssafy.io:8080",
});

export default instance;
