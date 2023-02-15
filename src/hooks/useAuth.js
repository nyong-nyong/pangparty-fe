/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState, userState } from "../recoils/user/Atoms";
import axios from "../api/axios";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const getAuth = useRecoilValue(authState);
  const getUser = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAuth || !getUser) return navigate("/login");
    const token = localStorage.getItem("Token");
    axios.defaults.headers.common["Authorization"] = token;
    setUser(getUser);
    setAuthenticated(getAuth);
  }, [getAuth, getUser]);

  return { user, authenticated };
}
