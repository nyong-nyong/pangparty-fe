import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

export default function EventCalander() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calanderContainer">
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("D")}
        value={value}
        // selectRange={true}
      />
      <p className="calanderAlert">오늘은 이벤트가 없어요</p>
    </div>
  );
}
