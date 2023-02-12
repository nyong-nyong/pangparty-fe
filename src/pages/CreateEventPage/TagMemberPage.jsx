/* eslint-disable */
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
import "../../styles/CreateEvent.scss";

import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function TagMemberPage() {
  const [targetsInfo, setTargetsInfo] = useRecoilState(targetsTagState);
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [])


  const targetTagHandler = (e) => {
    const newTargetTag = e.target.value;
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
      </div>

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        <Button>다음</Button>
      </Link>
    </div>
  );
}
