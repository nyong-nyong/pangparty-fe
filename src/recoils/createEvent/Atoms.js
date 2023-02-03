import { atom } from "recoil";

// 축하 당할 사람 정보
const targetsTagState = atom({
  key: "targetsTagState",
  default: [],
});

// 디데이 날짜 정보
const dDayState = atom({
  key: "dDayState",
  default: "",
});

// 이벤트 설명 정보
const eventIntroState = atom({
  key: "eventIntroState",
  default: "",
});

// 이벤트 해쉬태그 정보
const hashTagState = atom({
  key: "hashTagState",
  default: [],
});

// 이벤트 이미지 정보
const imgUrlState = atom({
  key: "imgUrlState",
  default: "",
});

// 이벤트명 정보
const eventNameState = atom({
  key: "eventNameState",
  default: "",
});

/*
const createEventState = atom({
  key: "createEventState",
  default: {
    // event 오픈 한 사람 정보
    host: {
      id: "",
      name: "",
      // host 프로필 사진
      imgUrl: "",
    },
    // 이벤트 정보
    eventName: "",
    introduction: "",
    // 이벤트 배너 이미지
    imgUrl: "",
    targets: [
      {
        id: "",
        name: "",
        imgUrl: "",
      },
    ],
    hashtags: [
      {
        uid: null,
        name: "",
      },
    ],
    dDay: null,
    startTime: null,
    endTime: null,
    partyTime: null,
    isPrivate: 0,
    hasRollingPaper: 1,
    hasAlbum: 1,
    hasPlaylist: 0,
    hasFunding: 0,
  },
});
*/

export {
  targetsTagState,
  dDayState,
  eventIntroState,
  hashTagState,
  imgUrlState,
  eventNameState,
};
