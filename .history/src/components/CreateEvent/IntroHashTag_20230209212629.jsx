/* eslint-disable */
importfrom  ""

function IntroHashTag({ eventInfo }) {
  return (
    <div>
      <div className="hashtagContainer">
        <p className="hashtag">#해시태그</p>
        {eventInfo &&
          eventInfo.hashtags.map((hashtag) => {
            if (hashtag) {
              return (
                <div key={hashtag.name}>
                  <p className="hashtag">{hashtag.name}</p>
                  <HashTag className="hashtag">{hashtag.name}</HashTag>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default IntroHashTag;
