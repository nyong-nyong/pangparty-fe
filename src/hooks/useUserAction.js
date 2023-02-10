/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import axios from "../api/axios";
import requests from "../api/requests";
import { authState, userState } from "../recoils/user/Atoms";

const JWT_EXPIRY_TIME = 1 * 3600 * 1000;

export default function useUserAction() {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const setAuth = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const onSilentRefresh = async (token) => {
    await axios.post(requests.refreshToken, token)
    .then((res) => {
      setCookie("refreshToken", res.refreshToken);
      setAuth(true);
      setUser(res.id);
      axios.defaults.headers.common["Authorization"] = res.accessToken;
      setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    })
    .catch((err) => {
      removeCookie("refreshToken");
      setAuth(false);
      setUser(null);
      navigate("/login");
    })
  }

  function logIn(userInfo) {
    // eslint-disable-next-line no-shadow
    async function postLogin(userInfo) {
      await axios
        .post(
          requests.login,
          userInfo,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          setCookie("refreshToken", res.refreshToken);
          // httpOnly option 넣기 -> but 브라우저에서 접근 불가능. 백엔드 완성되면 넣자.
          setAuth(true);
          setUser(res.id);
          axios.defaults.headers.common["Authorization"] = res.accessToken;
          navigate(-1);
          setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
        })
        .catch((err) => {
          removeCookie("refreshToken");
          setAuth(false);
          setUser(null);
          navigate("/login");
        });
    }
    postLogin(userInfo);
  }

  function logOut() {
    removeCookie("refreshToken");
    setAuth(false);
    setUser(null);
    delete axios.defaults.common["Authorization"];
    navigate("/");
  }

  return {
    logIn,
    logOut,
    onSilentRefresh,
  };
}

// 이런 방식으로 처리하면 됩니다.
// const auth = useRecoilValue(authState);
// const user = useRecoilValue(userState);
// const navigate = useNavigate();
// const userAction = useUserAction();

// const checkLogin = (e) => {
//   e.preventDefault();
//   if(!auth) {
//     navigate("/login");
//   };
// }

// const logOut = (e) => {
//   return userAction.logOut;
// }
