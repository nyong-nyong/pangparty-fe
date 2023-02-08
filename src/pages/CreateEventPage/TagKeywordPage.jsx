/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { hashTagState } from "../../recoils/createEvent/Atoms";

function TagKeywordPage() {
  const [hashTagInfo, setHashTagInfo] = useRecoilState(hashTagState);

  const hashTagHandler = (e) => {
    const newhashTag = {
      uid: 123,
      name: e.target.value,
    };
    setHashTagInfo(newhashTag);
  };
  return (
    <div>
      <h1>관련 키워드를 태그해주세요</h1>
      <input onChange={hashTagHandler} />
      <Link to="/event/selecting">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
