function IntroRpHeader({ eventInfo }) {
  return (
    <div>
      <div className="rPinfoBox">
        <p className="rpTitle">롤링페이퍼</p>
        <hr />
        <p className="rpContent">
          현재{" "}
          <span style={{ color: "#678cff", fontWeight: "900" }}>
            {eventInfo && eventInfo.rollingPaperParticipantCnt}
          </span>
          명이{" "}
          <span style={{ color: "#FF7A5C" }}>
            {eventInfo && eventInfo.targetId}님{" "}
          </span>
          에게
          <br />
          롤링페이퍼를 작성했어요!
        </p>
      </div>
    </div>
  );
}

export default IntroRpHeader;
