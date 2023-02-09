import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import "./Badges.css";

export default function Badges() {
  const [badgeList, setBadgeList] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.profile.getProfileBadges("dasom02")
      );
      setBadgeList(request.data);
    }
    fetchData();
  }, []);

  return (
    <div className="badgeContainer">
      {badgeList &&
        badgeList.badges.map((badge) => {
          if (badge) {
            return (
              // 디자인 MyPage.css 적용
              <div key={badge.badgeUid}>
                <div className="badgeImgContainer">
                  <img className="badgeImg" src={badge.imgUrl} alt="badge" />
                  <p>{badge.badgeName}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
