/* eslint-disable */
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
import "../../styles/CreateEvent.scss";

export default function TagMemberPage() {
  const [targetsInfo, setTargetsInfo] = useRecoilState(targetsTagState);


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
  //   setSearchType("member");
  // }, []);


  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">축하해줄 친구를 태그해볼까요?</p>
        {/* 임시 버튼입니다 */}
        <input
          type="text"
          className="inputBox"
          onChange={targetTagHandler}
          style={{}}
        />
      </div>

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        <Button>다음</Button>
      </Link>
    </div>
  );
}
