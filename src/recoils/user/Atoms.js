import { atom } from "recoil";

const authState = atom({
  key: "authState",
  default: false,
});

const userState = atom({
  key: "usersState",
  default: null,
});

export { authState, userState };
