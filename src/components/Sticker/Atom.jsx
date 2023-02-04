/* eslint-disable */
import { atom } from "recoil";

// modal의 on/off 및 moveable을 위한 스티커 정보 이동 atom
export const stickerState = atom({
  key: "isStickerInfo",
  default: undefined,
});

// 한 롤링페이퍼 당 fetch받은 stickerList Data가 담긴 atom
export const stickerListState = atom({
  key: "isStickerListData",
  default: [],
});
