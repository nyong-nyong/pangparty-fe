/* eslint-disable */
import { atom } from "recoil";

export const stickerState = atom({
  key: "isStickerInfo",
  default: undefined,
  // 새로운 스티커 값이 들어왔겠지? -> value
});