/* eslint-disable */
import { atom } from "recoil";

export const stickerState = atom({
  key: "isStickerInfo",
  default: "",
});

export const stickerClickState = atom({
  key: "isStickerClick",
  default: false,
});
