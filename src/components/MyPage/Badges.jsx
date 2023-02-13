import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
// import "./Badges.css";

export default function Badges() {
  const [badgeList, setBadgeList] = useState(undefined);
  const [isOpened, setIsOpened] = useState(false);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.profile.getProfileBadges(`${user}`)
      );
      setBadgeList(request.data);
      console.log(request.data);
    }
    fetchData();
  }, [user]);

  const openDiscription = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="profilebottomContainer">
      <div className="badgeContainer">
        <button type="button" onClick={openDiscription}>
          설명보기
        </button>
        {badgeList &&
          badgeList.memberBadges.map((badge) => {
            if (badge) {
              return (
                // 디자인 MyPage.css 적용
                <div key={badge.uid}>
                  <div className="badgeImgContainer">
                    <img
                      className="badgeImg"
                      src={
                        badge.hasBadge ? badge.trueImgUrl : badge.falseImgUrl
                      }
                      alt="badge"
                    />
                    <p className="badgeName">{badge.badgeName}</p>
                    {isOpened ? (
                      <div className="rightContainer">
                        <p>{badge.hasBadge ? badge.badgeCondition : null}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
}
