/* eslint-disable */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { stickerState, stickerListState } from "../components/Sticker/Atom";
import axios from "../api/axios";
import requests from "../api/requests";
import MoveablePiece from "../components/Sticker/MoveablePiece";
import StickerListModal from "../components/Sticker/StickerListModal";
import StickerPost from "../components/Sticker/StickerPost";
import Button from "../components/common/Button";
import PieceContainer from "../components/RpTheme/PieceContainer";
import CompleteStickerList from "../components/Sticker/CompleteStickerList";

export default function PieceListPage() {
  const [pieceListData, setPieceListData] = useState(undefined);
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
  const page = 1;
  const limit = 30;

  useEffect(() => {
    async function fetchPieceList() {
      await axios
        .get(
          requests.events.rollingPaper.rpPieceAll(
            eventUid,
            rollingPaperUid,
            page,
            limit
          )
        )
        .then((res) => {
          setPieceListData(res.data.rollingPaperPieces);
          // console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPieceList();

    async function fetchStickerList() {
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
          // console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    fetchStickerList();
  }, []);

  // 모달 오픈
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <div
        className="RpPieceStickerList"
        style={{ width: "100%", height: "100%", position: "relative" }} // 스티커페이지 연결
      >
        <h1>완성된 롤링페이퍼 페이지</h1>
        {/* 롤링페이퍼 조각 리스트 */}
        <div className="pieceListPageContainer" style={{ display: "flex", flexWrap: "wrap" }}>
          {pieceListData &&
            pieceListData.map((piece, index) => {
              if (piece) {
                return (
                  <PieceContainer
                    key={piece.rollingPaperPieceUid}
                    piece={piece}
                    index={ index}
                  />
                );
              }
            })}
        </div>

        {/* 사용자들이 붙인 스티커 리스트 */}
        <CompleteStickerList />
      </div>
      <div
        className="btnContainer"
        style={{ display: "flex", alignItems: "center", flexFlow: "column" }}
      >
        <Link to="/piece">
          <Button>롤링페이퍼 쓰기 버튼</Button>
        </Link>
        <Button type="button" onClick={showModal}>
          🧸스티커 붙이기🧸
        </Button>
      </div>
      {stickerInfo && (
        <StickerPost eventUid={eventUid} rollingPaperUid={rollingPaperUid} />
      )}
      {/* <div style={{ width: "344px", height: "520px", background: "orange" }} /> */}
      {modalOpen && <StickerListModal setModalOpen={setModalOpen} />}
      {stickerInfo && <MoveablePiece sticker={stickerInfo} />}
    </div>
  );
}
