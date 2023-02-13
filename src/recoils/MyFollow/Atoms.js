import { atom } from "recoil";

// 유저의 팔로잉 목록
const myFollowingState = atom({
  key: "myFollowingState",
  default: [],
});

export default myFollowingState;
