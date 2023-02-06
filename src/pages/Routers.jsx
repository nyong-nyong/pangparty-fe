import { Route, Routes } from "react-router-dom";

import Home from "./HomePage";
import IntroEvent from "./IntroEventPage";
import CreatePiece from "./CreatePiecePage";
import PieceList from "./PieceListPage";
import NotFoundPage from "./NotFoundPage";
import TagMemberPage from "./CreateEventPage/TagMemberPage";
import EventDiscription from "./CreateEventPage/EventDiscriptionPage";
import DdayCalendar from "./CreateEventPage/DdayCalendarPage";
import TagKeywordPage from "./CreateEventPage/TagKeywordPage";
import SelectImagePage from "./CreateEventPage/SelectImagePage";
import EventNamingPage from "./CreateEventPage/EventNamingPage";
import ConfirmEventPage from "./CreateEventPage/ConfirmEventPage";
import EventDonePage from "./CreateEventPage/EventDonePage";

// 라우터만 모이는 곳 (차후에 관리하기 편하도록 여기 다 때려박으면됨)

// 경로는 차후에 api설계 완료 시 바뀔 예정!!!! (임시)
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 회원가입 페이지 */}
      <Route path="signup">
        {/* <Route path="intro" element={<SingUpIntro />} />
        <Route path="email" element={<SignUpEmail />} /> */}
      </Route>
      {/* 이벤트 페이지 */}
      <Route path="event">
        <Route path="intro" element={<IntroEvent />} />
        <Route>
          <Route path="tagmember" element={<TagMemberPage />} />
          <Route path="calendar" element={<DdayCalendar />} />
          <Route path="discript" element={<EventDiscription />} />
          <Route path="tagkwd" element={<TagKeywordPage />} />
          <Route path="selecting" element={<SelectImagePage />} />
          <Route path="naming" element={<EventNamingPage />} />
          <Route path="confirm" element={<ConfirmEventPage />} />
          <Route path="done" element={<EventDonePage />} />
        </Route>
      </Route>
      <Route path="piece" element={<CreatePiece />} />
      <Route path="rollingpaper">
        <Route path="" element={<PieceList />} />
      </Route>
      {/* 에러페이지 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
