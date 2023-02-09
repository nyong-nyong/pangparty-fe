/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dDayState } from "../../recoils/createEvent/Atoms";
import { hashTagState } from "../../recoils/createEvent/Atoms";
import moment from "moment";
import Button from "../../components/common/Button";
import HashTag from "../../components/common/HashTag";
import "../../styles/CreateEvent.scss";
import { useEffect } from "react";

function TagKeywordPage() {
  const [hashTagInfo, setHashTagInfo] = useRecoilState(hashTagState);
  const dDay = useRecoilValue(dDayState);
  const dayInfo = moment(dDayState).format;

  // 이게 방법1 구현하다가 일단 귀찮아서 껏음
  // 방법1, 2 결정나야 확실히 할듯. 근데 1번이 방법으로 해야지 나중에 dDay 계산하기 쉬움.
  useEffect(() => {
    if (dDay) {
      const year = dDay.getFullYear();
      const month = dDay.getMonth() + 1;
      const date = dDay.getDate();
    }
  }, [dDay]);

  const hashTagHandler = (e) => {
    const newhashTag = {
      uid: 123,
      name: e.target.value,
    };
    setHashTagInfo(newhashTag);
  };
  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">관련 키워드를 태그해주세요</p>
        {/* 임시 버튼입니다 */}
        <input
          type="text"
          onChange={hashTagHandler}
          style={{
            height: "55px",
            borderRadius: "15px",
            border: "1.5px solid #D9D9D9",
            marginBottom: "30px",
          }}
        />
        <div className="createdTags">
          <p>{dayInfo ? dayInfo : "??"}</p>
          <HashTag color="gray" children="#해시태그"></HashTag>
          <HashTag
            color="gray"
            children={dDay ? dDay.toString() : "디데이없음"}
          ></HashTag>
          {/*  Date()는 형태가 따로 있어서.. 일단 여기선 toString으로 string 형태로 변환해줬음
          지금까지의 문제는 children으로 받은 애가 그냥 값을 떄릴 수 있는 형태(number이나 string)이 아녔어서 에러가 났었음
          방법 1) 이 페이지에서 Date() 형식을 변환해서 String 값으로 출력
          방법 2) 애시당초 new Date() 값을 저장할때 변환해서 String 값으로 저장 
          이 글을 읽고 위쪽으로 올라가보시오 */}
        </div>
      </div>
      <Link to="/event/selecting">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
