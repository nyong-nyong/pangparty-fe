import "./FeedList.scss";
import profile from "../../assets/profile.svg";
import Icon from "../common/Icon";

export default function Feed({ feed }) {
  // console.log(feed);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return (
    <div className="feedContainer">
      <div className="feedMember">
        {/* {feed.profileImgUrl ? (
          <img src={feed.profileImgUrl} alt="프로필사진" />
        ) : ( */}
        <img src={profile} alt="프로필기본사진" />
        {/* )} */}
        <div className="titleAndMember">
          <p className="feedTitle">{feed.title}</p>
          <p className="feedId">@{feed.memberId}</p>
        </div>
      </div>
      <div className="feedContent">
        <p>{feed.content}</p>
        <p className="feedTime">{timeForToday(feed.createTime)}</p>
      </div>
      <div>
        <Icon img="like" />
        <Icon img="comment" />
      </div>
    </div>
  );
}
