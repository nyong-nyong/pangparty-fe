import axios from "axios";

const instance = axios.create({
  baseURL: "https://6f0a6dd2-1980-49a4-a5ab-6a69e1ed5d75.mock.pstmn.io",
});

export default instance;
