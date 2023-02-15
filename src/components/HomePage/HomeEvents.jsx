import HomeEndEvents from "./HomeEndEvents";
import HomeStartEvents from "./HomeStartEvents";
import Icon from "../common/Icon";

export default function HomeEvents() {
  return (
    <div className="homeEventContainer">
      <div className="todayIssue">
        <Icon
          style={{
            display: "flex",
          }}
          img="todayIssue"
        />
        <span>오늘의 이슈</span>
      </div>
      <HomeStartEvents />
      <HomeEndEvents />
    </div>
  );
}
