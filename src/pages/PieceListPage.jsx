/* eslint-disable */
import axios from "../api/axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { stickerState, stickerListState } from "../components/Sticker/Atom";
import requests from "../api/requests";
import MoveablePiece from "../components/Sticker/MoveablePiece";
import StickerListModal from "../components/Sticker/StickerListModal";
import StickerPost from "../components/Sticker/StickerPost";

export default function PieceListPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stickerListData, setStickerListData] =
    useRecoilState(stickerListState);
  const stickerInfo = useRecoilValue(stickerState);

  // axios로 Data 가져오기 (추후 컴포넌트로 분리시 같이 데리고가기)
  // fetch한 스티커리스트는 recoil에 담았음
  const eventUid = 300001;
  const rollingPaperUid = 777777;
  const topStart = 0;
  const topEnd = 100;

  useEffect(() => {
    async function fetchStickerList() {
      console.log(
        requests.events.rollingPaper.rpStickerAll(
          eventUid,
          rollingPaperUid,
          topStart,
          topEnd
        )
      );
      await axios
        .get(
          requests.events.rollingPaper.rpStickerAll(
            eventUid,
            rollingPaperUid,
            topStart,
            topEnd
          )
        )
        .then((res) => {
          setStickerListData(res.data.rollingPaperStickers);
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    fetchStickerList();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(
  //       requests.events.rollingPapger.rpStickerAll(
  //         eventUid,
  //         rollingPaperUid,
  //         topStart,
  //         topEnd
  //       )
  //     );
  //     setStickerListData(request.data.rollingPapgerStickers);
  //   }
  //   fetchData();
  // }, []);

  // 모달 오픈
  const showModal = () => {
    setModalOpen(true);
  };

  // 롤링페이퍼 완성화면을 컴포넌트로 분리할 것
  // 다솜 + 규연 병합 후에 진행
  return (
    <div id="RP-page">
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button type="button" onClick={showModal}>
          🧸스티커 붙이기🧸
        </button>
        {stickerInfo && (
          <StickerPost eventUid={eventUid} rollingPaperUid={rollingPaperUid} />
        )}
      </div>
      <div style={{ width: "344px", height: "520px", background: "orange" }} />
      {modalOpen && <StickerListModal setModalOpen={setModalOpen} />}
      {stickerInfo && <MoveablePiece sticker={stickerInfo} />}
      {/* <Link to="/">🏡 회귀 🏡</Link> */}
    </div>
  );
}
