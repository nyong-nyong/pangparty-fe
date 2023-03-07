import { atom } from "recoil";

const signUpEmailState = atom({
  key: "signUpEmailState",
  default: "",
});

// eslint-disable-next-line import/prefer-default-export
export { signUpEmailState };
