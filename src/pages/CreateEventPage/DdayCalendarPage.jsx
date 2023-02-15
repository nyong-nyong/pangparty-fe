/* eslint-disable */
import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";
import { dDayState } from "../../recoils/createEvent/Atoms";
import "../../styles/DdayCalendarPage.css";
import "../../styles/CreateEvent.scss";
import Button from "../../components/common/Button";

function DdayCalendar() {
  const [value, onChange] = useState(new Date());
  const [isInput, setIsInput] = useState(false);
  const [dDayInfo, setDDayInfo] = useRecoilState(dDayState);

  const dDayHandler = (e) => {
    if (isInput === false) {
      e.preventDefault();
      alert("디데이를 입력해주세요 🥳");
    }
    const newDDay = value;

    const fullyear = newDDay.getFullYear().toString();
    const month = (newDDay.getMonth() + 1).toString();
    const date = newDDay.getDate().toString();
    const fullDDay = fullyear + "년 " + month + "월 " + date + "일";
    const fullDDayPost = `${fullyear}-${month >= 10 ? month : "0" + month}-${
      date >= 10 ? date : "0" + date
    }`;

    setDDayInfo({
      fullyear: fullyear,
      month: month,
      date: date,
      fullDDay: fullDDay,
      fullDDayPost: fullDDayPost
    });
    // setDDayInfo(newDDay);
  };

  /*
  날짜를 클릭하는 이벤트를 활성화 해야 다음 버튼 활성화
  */
  const inputHandler = () => {
    setIsInput(true);
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">축하일은 언제인가요?</p>
        <div className="dDayContainer">
          <Calendar
            onChange={onChange}
            onClickDay={inputHandler}
            formatDay={(locale, date) => moment(date).format("D")}
            value={value}
            // selectRange={true}
          />
          <div className="dDay">
            <p className="dDayText">D-day</p>
            <p className="dDayDate">
              {moment(value).format("YYYY년 MM월 DD일")}
            </p>
          </div>
        </div>
      </div>
      <Link to="/event/discript">
        {!isInput && <Button onClick={dDayHandler}>다음</Button>}
        {isInput && (
          <Button color="orange-1" onClick={dDayHandler}>
            다음
          </Button>
        )}
      </Link>
    </div>
  );
}

export default DdayCalendar;
