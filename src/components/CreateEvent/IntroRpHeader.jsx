import { useEffect } from "react";

function IntroRpHeader({ eventInfo }) {
  useEffect(() => {
    console.log("Child useEffect");
  }, [eventInfo]);
  return (
    <div>
      <div className="rPinfoBox">
        <p className="rpTitle">롤링페이퍼</p>
        <hr />
        <p className="rpContent">
          현재{" "}
          <span style={{ color: "#FF7A5C" }}>
            {eventInfo && eventInfo.targetId}님
          </span>
          을 위해{" "}
          <span style={{ color: "#678cff" }}>
            {eventInfo && eventInfo.rollingPaperCnt}
          </span>
          장의 <br />
          롤링페이퍼가 작성되었어요!
        </p>
      </div>
    </div>
  );
}

export default IntroRpHeader;
