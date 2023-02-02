/* eslint-disable */
import { Link } from "react-router-dom";

function DdayCalendar() {
  return (
    <div>
      <h1>축하일은 언제인가요?</h1>
      <p>여기에 달력을 넣어주세용</p>
      <p>D-day</p>
      <Link to="/event/discript">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default DdayCalendar;
