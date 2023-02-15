/* eslint-disable */
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { eventNameState } from "../../recoils/createEvent/Atoms";
import Button from "../../components/common/Button";

function EventNamingPage() {
  const [typingEventName, setTypingEventName] = useState("");
  const [eventNameInfo, setEventNameInfo] = useRecoilState(eventNameState);

  const eventNameHandler = (e) => {
    const newEventName = e.target.value;
    setTypingEventName(newEventName);
  };

  const titleHandler = (e) => {
    if (!typingEventName) {
      e.preventDefault();
      alert("이벤트명을 입력해주세요!");
    } else {
      setEventNameInfo(typingEventName);
      setTypingEventName("");
    }
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">
          마지막으로, <br />
          이벤트명을 정해주세요
        </p>
        <div className="tagLabel">
          <input
            type="text"
            className="tagInput"
            value={typingEventName}
            onChange={eventNameHandler}
          />
        </div>
      </div> 
      <Link to="/event/confirm">
        {!typingEventName && <Button onClick={titleHandler}>다음</Button>}
        {typingEventName && (
          <Button onClick={titleHandler} color="orange-1">
            다음
          </Button>
        )}
      </Link>
    </div>
  );
}

export default EventNamingPage;
