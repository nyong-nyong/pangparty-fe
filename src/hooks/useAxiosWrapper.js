/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { authState } from "../recoils/user/Atoms";
import axios from "../api/axios";
import requests from "../api/requests";

export default function useAxiosWrapper() {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const [cookies, removeCookie] = useCookies(["id"]);

  const authHeader = (url) => {
    const token = auth?.token;
    const isLoggedIn = !!token;
    // startsWith React API URL
    const isApiUrl = url.startsWith(`${requests.login}`);
    if (isLoggedIn && isApiUrl) return { Authorization: `Bearer ${token}` };
    return {};
  };

  const request = (method) => {
    return (url, body) => {
      const requestOptions = {
        method,
        headers: authHeader(url),
      };
      if (body) {
        requestOptions.headers["Content-Type"] = "applcication/json";
        requestOptions.body = JSON.stringify(body);
      }
      return axios(url, requestOptions)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          // if(err.response && [401, 403].includes(err.status) && auth?.token) {
          // localStorage.removeItem("user");
          removeCookie("id");
          setAuth(null);
          navigate("/login");
          console.err(err);
          // }
        });
    };
  };

  return {
    get: request("GET"),
    post: request("POST"),
    del: request("DELETE"),
  };
}
