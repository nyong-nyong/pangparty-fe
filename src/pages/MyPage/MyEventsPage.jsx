import { useLocation } from "react-router-dom";
import HostEvent from "../../components/MyPage/HostEvent";
import InvolvingEvent from "../../components/MyPage/InvolvingEvent";
import InvolvedEvent from "../../components/MyPage/InvolvedEvent";

export default function MyEventsPage() {
  const location = useLocation();
  const tabState = {
    hostTab: location.state.host,
    involvingTab: location.state.involving,
    involvedTab: location.state.involved,
    id: location.state.id,
  };
  return (
    <div>
      <h3>
        @{tabState.id || null}님이
        {tabState.hostTab ? " 주최한 " : null}
        {tabState.involvingTab ? " 참여 중인 " : null}
        {tabState.involvedTab ? " 참여한 " : null}
        이벤트
      </h3>
      {tabState.hostTab ? <HostEvent id={tabState.id} /> : null}
      {tabState.involvingTab ? <InvolvingEvent id={tabState.id} /> : null}
      {tabState.involvedTab ? <InvolvedEvent id={tabState.id} /> : null}
    </div>
  );
}
