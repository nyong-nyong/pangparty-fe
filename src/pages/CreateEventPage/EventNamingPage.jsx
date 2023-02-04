/* eslint-disable */
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { eventNameState } from "../../recoils/createEvent/Atoms";
import Button from "../../components/common/Button";

function EventNamingPage() {
  const [eventNameInfo, setEventNameInfo] = useRecoilState(eventNameState);

  const eventNameHandler = (e) => {
    const newEventName = e.target.value;
    setEventNameInfo(newEventName);
  };

  return (
    <div>
      <h1>마지막으로, 이벤트명을 정해주세요</h1>
      <input onChange={eventNameHandler} />
      <Link to="/event/confirm">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default EventNamingPage;
