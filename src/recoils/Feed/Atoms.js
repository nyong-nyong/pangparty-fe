/* eslint-disable import/prefer-default-export */
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 선택된 디테일피드 하나의 정보
export const detailFeedState = atom({
  key: "detailFeedState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
