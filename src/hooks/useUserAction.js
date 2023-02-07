import { useSetRecoilState } from "recoil";
import requests from "../api/requests";
import { authState } from "../recoils/user/Atoms";
import history from "../utils/history";
import useAxiosWrapper from "./useAxiosWrapper";

export default function useUserAction() {
  const setAuth = useSetRecoilState(authState);
  const axiosWrapper = useAxiosWrapper();

  function logIn(userInfo) {
    // eslint-disable-next-line no-shadow
    async function postLogin(userInfo) {
      await axiosWrapper
        .post(requests.login, {
          data: userInfo,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          setAuth(user);
          console.log(user)
        });
    }
    postLogin(userInfo);
  }

  function logOut() {
    localStorage.removeItem("user");
    setAuth(null);
    history.push("/login");
  }

  return {
    logIn,
    logOut,
  };
}
