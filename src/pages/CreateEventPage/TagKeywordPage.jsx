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
  const [hashTags, setHashTags] = useState({
    // name: null
    name: ""
  });
  // atom으로 저장할 곳
  const [hashTagInfo, setHashTagInfo] = useRecoilState(hashTagState);
  // 당일 hashtag 생성용 임의 값
  const [dayInfo, setDayInfo] = useState({
    year: null,
    month: null,
    date: null
  });
  // 유저로 부터 입력된 dDay값
  const dDay = useRecoilValue(dDayState);

  // 이게 방법1 구현하다가 일단 귀찮아서 껏음
  // 방법1, 2 결정나야 확실히 할듯. 근데 1번이 방법으로 해야지 나중에 dDay 계산하기 쉬움.
  useEffect(() => {
    if (dDay) {
      const year = dDay.getFullYear();
      const month = dDay.getMonth() + 1;
      const date = dDay.getDate();
      setDayInfo({
        year: year,
        month: month,
        date: date
      });
      const renderHashTags = [...hashTagInfo, { name: `${month}월${month}일` }];
      setHashTagInfo(renderHashTags);
      // setHashTags({ name: null });
    }
  }, [dDay]);

  // 작성 중인 hashtag
  const hashTagHandler = (e) => {
    const newhashTag = {
      // 임의로 uid 지정
      name: e.target.value
    };
    setHashTags(newhashTag);
  };

  /*
  recoil에 저장하기 전,
  기존에 입력된 값인지 확인합니다. 
  unique함을 유지하기 위함.
  */
  const saveHashTag = (e) => {
    if(hashTagInfo) {
      if (hashTagInfo.find(v => v.name === hashTags.name) === false){
        const newHashTags = [...hashTagInfo, hashTags];
        setHashTagInfo(newHashTags);
        setHashTags({ name: null });
      } else {
        alert('이미 등록된 해쉬태그입니다!')
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
            value={hashTags.name}
          />
          <button className="tagBtn">추가</button>
          {hashTags.name !== null && (
            <button className="tagBtn" onClick={saveHashTag}>
              추가
            </button>
          )}
        </label>
        <div className="createdTags">
          <HashTag children="#해시태그"></HashTag>
          {hashTagInfo.length > 0 &&
            hashTagInfo.map((hashTag) => {
              if (hashTag) {
                return (
                  <HashTag
                    key={hashTag.name}
                    color="gray"
                    children={hashTag.name}
                  ></HashTag>
                );
              }
            })}
          {/*  Date()는 형태가 따로 있어서.. 일단 여기선 toString으로 string 형태로 변환해줬음
          지금까지의 문제는 children으로 받은 애가 그냥 값을 떄릴 수 있는 형태(number이나 string)이 아녔어서 에러가 났었음
          방법 1) 이 페이지에서 Date() 형식을 변환해서 String 값으로 출력
          방법 2) 애시당초 new Date() 값을 저장할때 변환해서 String 값으로 저장 
          이 글을 읽고 위쪽으로 올라가보시오 */}
          {hashTagInfo.length !== 0 ? (
            <p>{hashTagInfo[0].name}</p>
          ) : (
            <p>없음</p>
          )}
        </div>
      </div>
      <Link to="/event/selecting">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
