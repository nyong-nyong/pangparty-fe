import { atom } from "recoil";

const authState = atom({
  key: "authState",
  default: null,
  // default: JSON.parse(localStorage.getItem("user")),
});

const usersState = atom({
  key: "usersState",
  default: null,
});

export { authState, usersState };
