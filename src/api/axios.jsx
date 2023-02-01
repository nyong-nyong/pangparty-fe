import axios from "axios";

const instance = axios.create({
  baseURL: "https://5034a64e-6c76-4856-823c-278918b1725f.mock.pstmn.io",
  // baseURL: "https://ba1b80f8-dd6e-4776-99b1-4219d0443b4e.mock.pstmn.io",
  // baseURL: "https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io",
  timeout: 1000,
});

export default instance;
