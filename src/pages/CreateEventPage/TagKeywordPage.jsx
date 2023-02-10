/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dDayState } from "../../recoils/createEvent/Atoms";
import { hashTagState } from "../../recoils/createEvent/Atoms";
import Button from "../../components/common/Button";
import HashTag from "../../components/common/HashTag";
import "../../styles/CreateEvent.scss";
import { useEffect, useState } from "react";

function TagKeywordPage() {
  // 페이지 내부에서 추가되는 해쉬태그를 저장할 배열
  const [typingHashTag, setTypingHashTag] = useState({
    // uid: null
    name: "",
  });
  // atom으로 저장할 곳
  const [hashTagsInfo, setHashTagsInfo] = useRecoilState(hashTagState);
  // 당일 hashtag 생성용 임의 값
  const [dayInfo, setDayInfo] = useState({
    year: null,
    month: null,
    date: null,
  });
  // 유저로 부터 입력된 dDay값
  const dDay = useRecoilValue(dDayState);

  // 이게 방법1 구현하다가 일단 귀찮아서 껏음
  // 방법1, 2 결정나야 확실히 할듯. 근데 1번이 방법으로 해야지 나중에 dDay 계산하기 쉬움.
  useEffect(() => {
    if (dDay) {
      const fullyear = dDay.getFullYear().toString();
      const year = fullyear.substring(2, 4);
      const month = dDay.getMonth() + 1;
      const date = dDay.getDate();
      const dDayTagform =
        year +
        ("00" + month.toString()).slice(-2) +
        ("00" + date.toString()).slice(-2);
      // 디데이 정보 페이지에 저장
      setDayInfo({
        year: year,
        month: month,
        date: date,
      });
      // 해쉬태그 자동 등록
      if (hashTagsInfo) {
        if (hashTagsInfo.find((v) => v.name === dDayTagform) === undefined) {
          const renderHashTags = [{ name: dDayTagform }];
          setHashTagsInfo(renderHashTags);
          setTypingHashTag({ name: "" });
        }
      }
    }
  }, [dDay]);

  // 작성 중인 hashtag
  const hashTagHandler = (e) => {
    const newhashTag = {
      // 임의로 uid 지정
      name: e.target.value,
    };
    setTypingHashTag(newhashTag);
  };

  /*
  recoil에 저장하기 전,
  기존에 입력된 값인지 확인합니다. 
  unique함을 유지하기 위함.
  */
  const saveHashTag = (e) => {
    if (hashTagsInfo) {
      if (
        hashTagsInfo.find((v) => v.name === typingHashTag.name) === undefined
      ) {
        const newHashTags = [...hashTagsInfo, typingHashTag];
        setHashTagsInfo(newHashTags);
        setTypingHashTag({ name: "" });
      } else {
        alert("이미 등록된 해쉬태그입니다!");
        setTypingHashTag({ name: "" });
      }
    }
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">관련 키워드를 태그해주세요</p>
        {/* 검색 기능과 합쳐야합니다. */}
        <label className="tagLabel">
          <input
            className="tagInput"
            type="text"
            onChange={hashTagHandler}
            value={typingHashTag.name}
          />
          <button className="tagBtn">추가</button>
          {typingHashTag.name !== null && (
            <button className="tagBtn" onClick={saveHashTag}>
              추가
            </button>
          )}
        </label>
        <div className="createdTags">
          {hashTagsInfo.length > 0 &&
            hashTagsInfo.map((hashTag) => {
              if (hashTag) {
                return (
                  <HashTag
                    key={hashTag.name}
                    color="gray"
                    children={`# ${hashTag.name}`}
                    style={{ margin:"5px 3px"}}
                  ></HashTag>
                );
              }
            })}
        </div>
      </div>
      <Link to="/event/selecting">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
