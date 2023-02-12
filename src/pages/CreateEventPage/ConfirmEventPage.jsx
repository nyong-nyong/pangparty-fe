/* eslint-disable */
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  targetsTagState,
  dDayState,
  eventIntroState,
  hashTagState,
  imgUrlState,
  eventNameState
} from "../../recoils/createEvent/Atoms";
// import "./ConfirmEvent.css";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../../components/common/Button";
import HashTag from "../../components/common/HashTag";

function ConfirmEventPage() {
  const targetTag = useRecoilValue(targetsTagState);
  const dDay = useRecoilValue(dDayState);
  const eventIntro = useRecoilValue(eventIntroState);
  const hashTag = useRecoilValue(hashTagState);
  const imgUrl = useRecoilValue(imgUrlState);
  const eventName = useRecoilValue(eventNameState);

  // 디데이 가공

  const fullyear = dDay ? dDay.getFullYear().toString() : "디데이 없음";
  const month = dDay ? (dDay.getMonth() + 1).toString() : "";
  const date = dDay ? dDay.getDate().toString() : "";
  const fullDDay = fullyear + "년 " + month + "월 " + date + "일";
  const fullDDayPost = `${fullyear}-${month >= 10 ? month : "0" + month}-${
    date >= 10 ? date : "0" + date
  }`;

  const navigate = useNavigate();

  const postEvent = async () => {
    const postInfo = {
      targetId: targetTag,
      eventName: eventName,
      dday: fullDDayPost,
      introduction: eventIntro,
      // 이미지 POST EVENT 별도로 진행
      // imgUrl: imgUrl,
      hashtags: hashTag
    };

    // console.log(requests.events.postEvent);
    await axios
      .post(requests.events.postEvent, postInfo, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log(response);
        const eventUid = response.data.eventUid;
        // 렌더링 시키기
        navigate(`/events/${eventUid}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">입력된 내용을 확인해주세요 🥳</p>
        <div className="bannerContainer">
          <img className="banner" src={imgUrl} alt="배너" />
        </div>
        <div className="confirmInfos">
          <p className="labels">주인공</p>
          <p className="confirmContent">
            {targetTag ? targetTag : "타겟 네임 없음"}
          </p>
          <p className="labels">이벤트명</p>
          <p className="confirmContent">
            {eventName ? eventName : "설명 없음"}
          </p>
          <p className="labels">축하일 D-day</p>
          <p className="confirmContent">
            {fullDDay ? fullDDay : "디데이 없음"}
          </p>
          <p className="labels">설명</p>
          <p className="confirmContent">
            {eventIntro ? eventIntro : "설명 없음"}
          </p>
          <p className="labels">태그</p>
          <div className="createdTags">
            {hashTag.length > 0 &&
              hashTag.map((tag) => {
                if (tag) {
                  return (
                    <HashTag
                      key={tag.name}
                      color="gray"
                      children={`# ${tag.name}`}
                      style={{ margin: "5px 3px" }}
                    ></HashTag>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Button onClick={postEvent}>완성하기</Button>
      <Link to="/event/done">
        <Button onClick={postEvent}>이벤트 확인페이지로 넘어가기</Button>
      </Link>
    </div>
  );
}

export default ConfirmEventPage;
