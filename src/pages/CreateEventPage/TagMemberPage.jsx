/* eslint-disable */
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
import "../../styles/CreateEvent.scss";
// import MemeberSearch from "./MemberSearch";

import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function TagMemberPage() {
  const [targetsInfo, setTargetsInfo] = useRecoilState(targetsTagState);
  const [isInput, setIsInput] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [])


  const targetTagHandler = (e) => {
    const newTargetTag = e.target.value;
    setIsInput(true);
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
          value={targetsInfo}
        />
        {/* <MemeberSearch /> */}
      </div>

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
      {!isInput && <Button>다음</Button>}
        {isInput && (
          <Button color="orange-1" onClick={targetTagHandler}>
            다음
          </Button>
        )}
      </Link>
    </div>
  );
}
