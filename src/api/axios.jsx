import axios from "axios";

const instance = axios.create({
  baseURL: "https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io",
});

export default instance;
