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
        <div className="PangBtn">
          {params ? <Pang eventUid={params.eventId} /> : null}
        </div>
        <div
          className="banner"
          style={{
            backgroundImage: eventInfo ? `url(${eventInfo.imgUrl}` : null,
          }}
        >
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
