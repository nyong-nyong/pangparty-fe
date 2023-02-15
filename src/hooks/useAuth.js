/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { authState, userState } from "../recoils/user/Atoms";
import axios from "../api/axios";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const getAuth = useRecoilValue(authState);
  const getUser = useRecoilValue(userState);
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAuth || !getUser) return navigate("/login");
    axios.defaults.headers.common["Authorization"] = cookies.Token;
    // console.log(cookies.Token)
    setUser(getUser);
    setAuthenticated(getAuth);
  }, [getAuth, getUser]);

  // console.log({user, authenticated});
  return { user, authenticated };
}
