/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  targetsTagState,
  dDayState,
  eventIntroState,
  hashTagState,
  imgUrlState,
  eventNameState,
} from "../../recoils/createEvent/Atoms";
import "./ConfirmEvent.css";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../../components/common/Button";

function ConfirmEventPage() {
  const targetTag = useRecoilValue(targetsTagState);
  const dDay = useRecoilValue(dDayState);
  const eventIntro = useRecoilValue(eventIntroState);
  const hashTag = useRecoilValue(hashTagState);
  const imgUrl = useRecoilValue(imgUrlState);
  const eventName = useRecoilValue(eventNameState);

  const postEvent = async() => {
    const postInfo = {
      // event 오픈 한 사람 정보
      host: {
        id: "",
        name: "",
        // host 프로필 사진
        imgUrl: "",
      },
      // 이벤트 정보
      eventName: eventName,
      introduction: eventIntro,
      // 이벤트 배너 이미지
      imgUrl: imgUrl,
      targets: [targetTag],
      hashtags: [hashTag],
      dDay: dDay,
      startTime: null,
      endTime: dDay,
      partyTime: dDay,
      isPrivate: 0,
      hasRollingPaper: 1,
      hasAlbum: 1,
      hasPlaylist: 0,
      hasFunding: 0,
    };

    console.log(requests.events.postEvent)
    await axios
    .post(requests.events.postEvent, {
      data: postInfo,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });    
  };

  return (
    <div className="confirmContainer">
      <h3 style={{ marginLeft: "10px" }}>입력된 내용을 확인해주세요 🥳</h3>
      <div className="bannerContainer">
        <img className="banner" src={imgUrl} alt="배너" />
      </div>
      <div className="confirmInfos">
        <p className="labels">주인공</p>
        {targetTag ? targetTag.name : "타겟 네임 없음"}
        <p className="labels">이벤트명</p>
        {eventName ? eventName : "설명 없음"}
        <p className="labels">축하일 D-day</p>
        {dDay ? dDay.toString() : "디데이 없음"}
        <p className="labels">설명</p>
        {eventIntro ? eventIntro : "설명 없음"}
        <p className="labels">태그</p>
        {hashTag ? hashTag.name : "타겟 네임 없음"}
      </div>
      <Button onClick={postEvent}>임시 전송버튼</Button>
      <Link to="/event/done">
        <Button onClick={postEvent}>이벤트 확인페이지로 넘어가기</Button>
      </Link>
    </div>
  );
}

export default ConfirmEventPage;
