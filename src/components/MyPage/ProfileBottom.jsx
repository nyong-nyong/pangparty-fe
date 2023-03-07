import { useState } from "react";
import MyFeed from "./Feed";
import ReceicedEvent from "./ReceivedEvent";
import Badges from "./Badges";
import EventCalander from "./EventCalander";

export default function ProfileBottom({ profileInfo }) {
  const [isActivate, setIsActivate] = useState({
    Feed: true,
    ReceicedEvent: false,
    Badges: false,
    EventCalander: false,
  });

  const activateHandler = (e) => {
    const newActivation = {
      Feed: false,
      ReceicedEvent: false,
      Badges: false,
      EventCalander: false,
    };
    const newTarget = e.target.id;
    newActivation[newTarget] = true;
    setIsActivate(newActivation);
  };

  return (
    <div>
      <div className="ComponentsChooser">
        <button
          type="button"
          id="Feed"
          className={isActivate.Feed ? "componentBoxActive" : "componentBox"}
          onClick={activateHandler}
        >
          피드
        </button>
        <button
          type="button"
          id="ReceicedEvent"
          className={
            isActivate.ReceicedEvent ? "componentBoxActive" : "componentBox"
          }
          onClick={activateHandler}
        >
          받은 선물
        </button>
        <button
          type="button"
          id="Badges"
          className={isActivate.Badges ? "componentBoxActive" : "componentBox"}
          onClick={activateHandler}
        >
          뱃지
        </button>
        <button
          type="button"
          id="EventCalander"
          className={
            isActivate.EventCalander ? "componentBoxActive" : "componentBox"
          }
          onClick={activateHandler}
        >
          이벤트 달력
        </button>
      </div>
      <div>
        {isActivate.Feed && <MyFeed />}
        {isActivate.ReceicedEvent && (
          <ReceicedEvent userName={profileInfo ? profileInfo.name : null} />
        )}
        {isActivate.Badges && <Badges />}
        {isActivate.EventCalander && <EventCalander />}
      </div>
    </div>
  );
}
