import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import IntroEvent from "./IntroEventPage";
import CreatePiece from "./CreatePiecePage";
import PieceList from "./PieceListPage";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import SingUpIntro from "./SignUpPage/SignUpIntroPage";
import SignUpEmail from "./SignUpPage/SignUpEmailPage";
import MyPage from "./MyPage";
import FollowPage from "./MyPage/FollowPage";
import MyEventsPage from "./MyPage/MyEventsPage";
import TagMemberPage from "./CreateEventPage/TagMemberPage";
import EventDiscription from "./CreateEventPage/EventDiscriptionPage";
import DdayCalendar from "./CreateEventPage/DdayCalendarPage";
import TagKeywordPage from "./CreateEventPage/TagKeywordPage";
import SelectImagePage from "./CreateEventPage/SelectImagePage";
import EventNamingPage from "./CreateEventPage/EventNamingPage";
import ConfirmEventPage from "./CreateEventPage/ConfirmEventPage";
import EventDonePage from "./CreateEventPage/EventDonePage";
import PangPartyGiftPage from "./PangPartyGiftPage";
import GiftIntroPage from "./GiftIntroPage";
import Recap1Page from "./PangPartyRecapPage/Recap1Page";
// import Recap1DetailPage from "./PangPartyRecapPage/Recap1DetailPage";
import EventDetailPage from "./EventDetailPage";
import SearchMainPage from "./SearchPage/SearchMainPage";
import SearchResultPage from "./SearchPage/SearchResultPage";
import HashtagPage from "./SearchPage/HashtagPage";
import FeedPage from "./Feed/FeedPage";
import CreateFeedPage from "./Feed/CreateFeedPage";
import FeedDetail from "../components/Feed/FeedDetail";

// 라우터만 모이는 곳 (차후에 관리하기 편하도록 여기 다 때려박으면됨)

// 경로는 차후에 api설계 완료 시 바뀔 예정!!!! (임시)
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* 로그인 페이지 */}
      <Route path="login" element={<LoginPage />} />
      {/* 회원가입 페이지 */}
      <Route path="signup">
        <Route path="intro" element={<SingUpIntro />} />
        <Route path="email" element={<SignUpEmail />} />
      </Route>
      {/* 피드 페이지 */}
      <Route path="feed">
        <Route path="" element={<FeedPage />} />
        <Route path="create" element={<CreateFeedPage />} />
        <Route path=":postId" element={<FeedDetail />} />
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
      {/* 이벤트 조회 페이지 */}
      <Route path="events">
        <Route>
          {/* 이벤트 디테일 조회 페이지 */}
          <Route path=":eventId" element={<EventDetailPage />} />
          {/* 롤링페이퍼 페이지 조회 페이지 */}
          <Route path=":eventId/rollingpaper" element={<PieceList />} />
          {/* 롤링페이퍼 생성 페이지 */}
          <Route path=":eventId/newpiece" element={<CreatePiece />} />
        </Route>
      </Route>
      {/* 검색 페이지 */}
      <Route path="search">
        <Route path="" element={<SearchMainPage />} />
        <Route path=":value" element={<SearchResultPage />} />
        <Route path="hashtag" element={<HashtagPage />} />
      </Route>
      {/* 에러페이지 */}
      <Route path="*" element={<NotFoundPage />} />
      {/* 마이페이지 */}
      <Route path="mypage" element={<MyPage />} />
      <Route path="follows" element={<FollowPage />} />
      <Route path="myevents" element={<MyEventsPage />} />
      {/* 팡파티 페이지 */}

      <Route path="gift/intro" element={<GiftIntroPage />} />
      <Route path="gift" element={<PangPartyGiftPage />} />
      <Route path="gift/recap/1" element={<Recap1Page />} />
    </Routes>
  );
}
