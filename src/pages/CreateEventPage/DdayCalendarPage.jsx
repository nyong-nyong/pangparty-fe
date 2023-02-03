/* eslint-disable */
import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";
import { dDayState } from "../../recoils/createEvent/Atoms";
import "../../styles/DdayCalendarPage.css";

function DdayCalendar() {
  const [value, onChange] = useState(new Date());
  const [dDayInfo, setDDayInfo] = useRecoilState(dDayState);

  const dDayHandler = (e) =>{
    e.preventDefault();
    const newDDay = value
    setDDayInfo(newDDay)
  }

  return (
    <div style={{ fontFamily: "Pretendard-Regular" }}>
      <h3>축하일은 언제인가요?</h3>
      <div className="dDayContainer">
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("D")}
          value={value}
          // selectRange={true}
        />
        <div className="dDay">
          <p className="dDayText">D-day</p>
          <p className="dDayDate">{moment(value).format("YYYY년 MM월 DD일")}</p>
        </div>
        <button type="button" onClick={dDayHandler}>
          이 날짜가 맞아용 ㅎㅎ
        </button>
      </div>

      <Link to="/event/discript">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default DdayCalendar;
