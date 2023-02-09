/* eslint-disable */
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { eventIntroState } from "../../recoils/createEvent/Atoms";
import Button from "../../components/common/Button";
import "../../styles/CreateEvent.scss";

function EventDiscription() {
  const [eventIntroInfo, setEventIntroInfo] = useRecoilState(eventIntroState);

  const eventIntroHandler = (e) => {
    // let newEventIntro = { ...eventIntroInfo };
    const newEventIntro = e.target.value;
    setEventIntroInfo(newEventIntro);
  };

  const alertNoContent = (e) => {
    alert("내용을 입력해주세요!");
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">축하일을 간략히 설명해주세요!</p>
        <div className="eventDescriptionBox">
          <textarea
            className="eventDescriptionArea"
            placeholder="설명을 입력해주세요."
            onChange={eventIntroHandler}
          />
        </div>
      </div>
      {!eventIntroInfo && <Button onClick={alertNoContent}>다음</Button>}
      <Link to="/event/tagkwd">
        {eventIntroInfo && (
          <Button color="orange" onClick={eventIntroHandler}>
            다음
          </Button>
        )}
      </Link>
    </div>
  );
}

export default EventDiscription;
