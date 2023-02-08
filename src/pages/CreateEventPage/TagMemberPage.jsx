/* eslint-disable */
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
// import SearchBar from "../../components/Search/SearchBar";
// import SearchResults from "../../components/Search/SearchResults";
// import { searchTypeState } from "../../recoils/search/Atoms";

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
      <h4>축하해줄 친구를 태그해볼까요?</h4>

      <input type="text" onChange={targetTagHandler} />

      {/* search bar 영역 추후 병합 예정 */}
      {/* <SearchBar />
      <SearchResults />
      {eventInfo.hashtags[0].uid && <p>{eventInfo.hashtags[0].uid}</p>} */}

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        <Button>다음</Button>
      </Link>
      <Button>친구 계정이 없어요</Button>
    </div>
  );
}
