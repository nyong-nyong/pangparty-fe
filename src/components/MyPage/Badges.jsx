import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
// import "./Badges.css";

export default function Badges() {
  const [badgeList, setBadgeList] = useState(undefined);

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
    }
    fetchData();
  }, [user]);

  return (
    <div className="badgeContainer">
      {badgeList &&
        badgeList.memberBadges.map((badge) => {
          if (badge) {
            return (
              // 디자인 MyPage.css 적용
              <div key={badge.badgeUid}>
                <div className="badgeImgContainer">
                  <img
                    className="badgeImg"
                    src={
                      badge.hadBadge
                        ? `${process.env.PUBLIC_URL}${badge.trueImgUrl}`
                        : `${process.env.PUBLIC_URL}${badge.falseImgUrl}`
                    }
                    alt="badge"
                  />
                  <div className="badgeName">{badge.badgeName}</div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
