/* eslint-disable */
import HashTag from "../common/HashTag";

function IntroHashTag({ eventInfo }) {
  return (
    <div>
      <div className="hashtagContainer">
        {eventInfo &&
          eventInfo.hashtags.map((hashtag) => {
            if (hashtag) {
              return (
                <div key={hashtag.name}>
                  {/* <p className="hashtag">{hashtag.name}</p> */}
                  <HashTag>{hashtag.name}</HashTag>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default IntroHashTag;
