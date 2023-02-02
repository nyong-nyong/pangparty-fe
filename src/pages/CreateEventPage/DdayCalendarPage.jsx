/* eslint-disable */
import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";
import "../../styles/DdayCalendarPage.css";

function DdayCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ fontFamily: "Pretendard-Regular" }}>
      <h3>축하일은 언제인가요?</h3>
      <div className="dDayContainer">
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("D")}
          value={value}
        />
        <div className="dDay">
          <p className="dDayText">D-day</p>
          {moment(value).format("YYYY년 MM월 DD일")}
        </div>
      </div>

      <Link to="/event/discript">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default DdayCalendar;
