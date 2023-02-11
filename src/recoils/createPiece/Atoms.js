import { atom } from "recoil";

// 유저 아이디
const memberIdState = atom({
  key: "memberIdState",
  default: "",
});

// 작성자 이름
const writerNameState = atom({
  key: "writerNameState",
  default: "",
});

// 작성 내용
const contentState = atom({
  key: "contentState",
  default: "",
});

// BG color
const bgColorState = atom({
  key: "bgColorState",
  default: "CFCFCF",
});

// Font Color
const textColorState = atom({
  key: "textColorState",
  default: "000000",
});

// Font
const fontFamilyState = atom({
  key: "fontFamilyState",
  default: "Pretendard",
});

// Align
const textAlignState = atom({
  key: "textAlignState",
  default: "center",
});

export {
  memberIdState,
  writerNameState,
  contentState,
  bgColorState,
  textColorState,
  fontFamilyState,
  textAlignState,
};
