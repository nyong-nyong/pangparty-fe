/* eslint-disable */
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { eventIntroState } from "../../recoils/createEvent/Atoms";

function EventDiscription() {
  const [eventIntroInfo, setEventIntroInfo] = useRecoilState(eventIntroState);

  const eventIntroHandler = (e) => {
    let newEventIntro = { ...eventIntroInfo };
    newEventIntro = e.target.value
    setEventIntroInfo(newEventIntro)
  };

  return (
    <div>
      <h1>축하일을 간략히 설명해주세요!</h1>
      <textarea
        placeholder="설명을 입력해주세용~?"
        style={{ width: "350px", height: "300px" }}
        onChange={eventIntroHandler}
      />
      <Link to="/event/tagkwd">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default EventDiscription;
