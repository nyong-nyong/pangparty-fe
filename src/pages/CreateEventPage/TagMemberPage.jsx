/* eslint-disable */
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
// import SearchBar from "../../components/Search/SearchBar";
// import SearchResults from "../../components/Search/SearchResults";
// import { searchTypeState } from "../../recoils/search/Atoms";
import "../../styles/CreateEvent.scss";

export default function TagMemberPage() {
  const [targetsInfo, setTargetsInfo] = useRecoilState(targetsTagState);

  // Search bar 영역 추후 병합 예정
  // const [searchType, setSearchType] = useRecoilState(searchTypeState);

  const targetTagHandler = (e) => {
    const newTargetTag = {
      id: 123,
      name: e.target.value,
      imgUrl:
        "https://www.rover.com/blog/wp-content/uploads/2015/06/happy-dog-burrito2.jpg",
    };
    setTargetsInfo(newTargetTag);
  };

  // useEffect(() => {
  //   setSearchType('member');
  // }, []);

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">축하해줄 친구를 태그해볼까요?</p>
        {/* 임시 버튼입니다 */}
        <input
          type="text"
          onChange={targetTagHandler}
          style={{
            height: "55px",
            borderRadius: "15px",
            border: "1.5px solid #D9D9D9",
            marginBottom: "60px",
          }}
        />
      </div>

      {/* search bar 영역 추후 병합 예정 */}
      {/* <SearchBar />
      <SearchResults />
      {eventInfo.hashtags[0].uid && <p>{eventInfo.hashtags[0].uid}</p>} */}

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        <Button>다음</Button>
      </Link>
      <Button color="orange-3">친구 계정이 없어요</Button>
    </div>
  );
}
