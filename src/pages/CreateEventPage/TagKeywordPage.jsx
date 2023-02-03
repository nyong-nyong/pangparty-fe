/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { hashTagState } from "../../recoils/createEvent/Atoms";

function TagKeywordPage() {
  const [hashTagInfo, setHashTagInfo] = useRecoilState(hashTagState);

  const hashTagHandler = (e) => {
    let newhashTag = { ...hashTagInfo };
    newhashTag = e.target.value;
    setHashTagInfo(newhashTag)
  };
  return (
    <div>
      <h1>관련 키워드를 태그해주세요</h1>
      <input onChange={hashTagHandler} />
      <Link to="/event/selecting">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
