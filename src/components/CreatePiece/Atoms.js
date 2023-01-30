import { atom } from "recoil";

// 진짜 문제
// api에서는 전체 리스트로 받아옴
const pieceList = atom({
  key: "pieceList",
  default: [],
});

// 따라서 그걸 map을 돌려서 하나만 빼내는 게 바로 밑에 있는 피스인포임 ;;
const pieceInfo = atom({
  key: "pieceInfo",
  // api에서 받아오는 부분임
  default: {},
});

export { pieceList, pieceInfo };
