import Pang from "./Pang";

function IntroHeader({ params, eventInfo }) {
  return (
    <div>
      <div className="dDayInfoBox">
        <div className="dDayBox">D-day</div>
        <p className="dDayDate">{eventInfo && eventInfo.dday}</p>
      </div>
      <header className="header">{eventInfo && eventInfo.eventName}</header>
      <div className="PangBannerContiner">
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
