import Pang from "./Pang";

function IntroHeader({eventInfo}) {
  return (
    <div>
      <div className="dDayInfoBox">
        <div className="dDayBox">D-day</div>
        <p className="dDayDate">{eventInfo && eventInfo.dDay}</p>
      </div>
      <header className="header">{eventInfo && eventInfo.eventName}</header>
      <div className="Pang">
        <Pang eventUid={params.eventId} />
        <div className="banner">
          <div className="bannerContentBox">
            <p className="bannerContent">
              {eventInfo && eventInfo.introduction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroHeader;
