import RecapPang from "./RecapPang";
import RecapRp from "./RecapRp";
import RecapPhoto from "./RecapPhoto";
import RecapGoDetail from "./RecapGoDetail";

export default function RecapScroll(props) {
  const { eventInfo } = props;

  return (
    <div>
      <RecapPang pangNum={eventInfo.eventExports[0].eventLikeCnt} />
      <RecapRp
        writerNum={eventInfo.eventExports[0].rollingPaperParticipantCnt}
        rpNum={eventInfo.eventExports[0].rollingPaperCnt}
      />
      <RecapPhoto albumNum={eventInfo.eventExports[0].albumMediaCnt} />
      <RecapGoDetail />
    </div>
  );
}
