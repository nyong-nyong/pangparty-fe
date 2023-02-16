/* eslint-disable */
import { useNavigate } from "react-router-dom";
import HashTag from "../common/HashTag";

const randomColor = () => {
  const colorsObjs = {
    orange1: "orange",
    // orange3: "orange-3",
    gray1: "gray-1",
    blue1: "blue",
    blue3: "blue-3",
  };
  let colorArr = Object.values(colorsObjs);
  const randomIdx = Math.floor(Math.random() * 3);
  const newRandomColor = colorArr[randomIdx];
  return newRandomColor;
};

function IntroHashTag({ eventInfo }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hashtagContainer">
        {eventInfo &&
          eventInfo.hashtags.map((hashtag) => {
            if (hashtag) {
              return (
                <div
                  key={hashtag.name}
                  onClick={() => navigate(`/search/hashtag/${hashtag.name}`)}
                >
                  {/* <p className="hashtag">{hashtag.name}</p> */}
                  <HashTag color={randomColor()}>{hashtag.name}</HashTag>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default IntroHashTag;
