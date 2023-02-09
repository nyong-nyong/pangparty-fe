/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import axios from "axios";
import requests from "../api/requests";
import { authState } from "../recoils/user/Atoms";
import useAxiosWrapper from "./useAxiosWrapper";

export default function useUserAction() {
  const [cookies, setCookie] = useCookies(["id"]);
  const setAuth = useSetRecoilState(authState);
  const axiosWrapper = useAxiosWrapper();
  const navigate = useNavigate();

  function logIn(userInfo) {
    // eslint-disable-next-line no-shadow
    async function postLogin(userInfo) {
      await axiosWrapper
        .post(requests.login, {
          data: userInfo,
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((user) => {
          // localStorage.setItem("user", JSON.stringify(user));
          setCookie("id", user.token);
          // httpOnly option 넣기 -> but 브라우저에서 접근 불가능. 백엔드 완성되면 넣자.
          setAuth(user);
          axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
          navigate(-1);
        });
    }
    postLogin(userInfo);
  }

  function logOut() {
    localStorage.removeItem("user");
    setAuth(null);
    navigate("/login");
  }

  return {
    logIn,
    logOut,
  };
}
