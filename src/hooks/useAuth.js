/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/user/Atoms";
import axios from "../api/axios";
import requests from "../api/requests";

async function getAuthenticatedUser() {
  const [cookies, setCookie] = useCookies(["id"]);
  const defaultReturnObj = { user: null, authenticated: false };
  try {
    const token = cookies;
    if (!token) {
      return defaultReturnObj;
    }
    const response = await axios.get(requests.login(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const returnObj = {
      user: response.data.user,
      authenticated: response.data.authenticated,
    };
    return returnObj;
  } catch (err) {
    // console.log(err);
    return defaultReturnObj;
  }
}

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const getAuth = useRecoilValue(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAuth) return;
    async function getUserDetails() {
      const { user, authenticated } = await getAuthenticatedUser();
      if (!authenticated) {
        return navigate("/login");
      }
      // console.log(authenticated);
      setUser(user);
      setAuthenticated(authenticated);
    }
    getUserDetails();
  }, [getAuth]);

  return { user, authenticated };
}
