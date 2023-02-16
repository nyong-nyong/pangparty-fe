/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import axios from "../api/axios";
import requests from "../api/requests";
import { authState, userState } from "../recoils/user/Atoms";


// const JWT_EXPIRY_TIME = 1 * 3600 * 1000;

export default function useUserAction() {
  const setAuth = useSetRecoilState(authState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  // const onSilentRefresh = async (token) => {
  //   await axios.post(requests.refreshToken, token, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   },
  //   { withCredentials: true })
  //   .then((res) => {
  //     setCookie("refreshToken", res.data.refreshToken);
  //     setAuth(true);
  //     setUser(res.data.id);
  //     axios.defaults.headers.common["Authorization"] = res.data.accessToken;
  //     axios.defaults.headers.common["RefreshToken"] = res.data.refreshToken;
  //     setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 3590000);
  //   })
  //   .catch((err) => {
  //     removeCookie("refreshToken");
  //     setAuth(false);
  //     setUser(null);
  //     navigate("/login");
  //   })
  // }

  function logIn(userInfo) {
    // eslint-disable-next-line no-shadow
    async function postLogin(userInfo) {
      if (!userInfo) return;
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
          localStorage.setItem("Token", res.data.accessToken);
          // httpOnly option 넣기 -> but 브라우저에서 접근 불가능. 백엔드 완성되면 넣자.
          setAuth(true);
          setUser(res.data.id);
          // axios.defaults.headers.common["Token"] = res.data.refreshToken;
          axios.defaults.headers.common["Authorization"] = res.data.accessToken;
          // axios.defaults.headers.common["Token"] = res.data.refreshToken;
          // console.log(axios.defaults.headers.common);
          navigate(-1);
          // setTimeout(() => {onSilentRefresh(res.data.refreshToken)}, JWT_EXPIRY_TIME - 3590000);
        })
        .catch((err) => {
          localStorage.removeItem("Token");
          setAuth(false);
          setUser(null);
          // eslint-disable-next-line no-alert
          Swal.fire(err.response.data.message);
          navigate("/login");
        });
    }
    postLogin(userInfo);
  }

  function logOut() {
    localStorage.removeItem("Token");
    setAuth(false);
    setUser(null);
    if(axios.defaults.common) {
      delete axios.defaults.common["Authorization"];
    }
    navigate("/");
  }

  return {
    logIn,
    logOut,
    // onSilentRefresh,
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
