import { atom } from "recoil";

// 축하 당할 사람 정보
const authState = atom({
  key: "authState",
  default: JSON.parse(localStorage.getItem("user")),
});

const usersState = atom({
  key: "usersState",
  default: null,
});

export { authState, usersState };
