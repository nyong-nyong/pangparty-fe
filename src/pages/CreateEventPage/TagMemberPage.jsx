/* eslint-disable */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import Button from "../../components/common/Button";
import { targetsTagState } from "../../recoils/createEvent/Atoms";
import "../../styles/CreateEvent.scss";
import MemeberSearch from "../../components/CreateEvent/MemberSearch";
import Icon from "../../components/common/Icon";

import useAuth from "../../hooks/useAuth";

export default function TagMemberPage() {
  const [targetsInfo, setTargetsInfo] = useRecoilState(targetsTagState);
  const [isInput, setIsInput] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  const prevent = (e) => {
    e.preventDefault();
    alert("축하 대상을 지정해주세요!");
  };

  const clearText = (e) => {
    e.preventDefault();
    setIsInput(false);
    setTargetsInfo("");
    setSearchText("");
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">축하해줄 친구를 태그해볼까요?</p>
        {/* 임시 버튼입니다 */}
        {/* <input
          type="text"
          className="inputBox"
          onChange={targetTagHandler}
          value={targetsInfo}
        /> */}
        <MemeberSearch
          setIsInput={setIsInput}
          searchText={searchText}
          setSearchText={setSearchText}
          setTargetsInfo={setTargetsInfo}
        />
      </div>

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        {!isInput && <Button onClick={prevent}>다음</Button>}
        {isInput && <Button color="orange-1">다음</Button>}
      </Link>
    </div>
  );
}
