/* eslint-disabled */
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
// import styled from "styled-components";
import { stickerListState } from "../Sticker/Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import PieceContainer from "../CreatePiece/PieceContainer";
// import CompleteStickerList from "../Sticker/CompleteStickerList";

export default function GiftRpList(props) {
  // const { eventInfo, params } = props;
  const [pieceListData, setPieceListData] = useState(undefined);
  const setStickerListData = useSetRecoilState(stickerListState);
  // const stickerInfo = useRecoilValue(stickerState);

  // const params = useParams();
  // const rpUid = props.eventInfo.rpUid;
  const [rpUid, setRpUid] = useState("");
  const [eventUid, setEventUid] = useState("");

  useEffect(() => {
    if (!props) return;
    setRpUid(props.eventInfo.rpUid);
    setEventUid(props.params.eventId);
  }, [props]);

  // axios로 Data 가져오기 (추후 컴포넌트로 분리시 같이 데리고가기)
  // fetch한 스티커리스트는 recoil에 담았음
  // const eventUid = props.params.eventId;
  // const rpUid = rpUid;
  const topStart = 1;
  const topEnd = 800;
  const page = 0;
  const size = 30;

  useEffect(() => {
    // console.log(">?");
    // console.log(props);
    // 롤페 피스 목록 GET
    // console.log(eventInfo);
    async function fetchPieceList() {
      if (!eventUid || !rpUid) return;
      await axios
        .get(
          requests.events.rollingPaper.rpPieceAll(eventUid, rpUid, page, size)
        )
        .then((res) => {
          setPieceListData(res.data.rollingPaperPieces);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchPieceList();
    // console.log(rpUid);

    // 롤페 스티커 목록 GET
    async function fetchStickerList() {
      if (!eventUid || !rpUid) return;
      await axios
        .get(
          requests.events.rollingPaper.rpStickerAll(
            eventUid,
            rpUid,
            topStart,
            topEnd
          )
        )
        .then((res) => {
          // console.log(res);
          setStickerListData(res.data.rollingPaperStickers);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    fetchStickerList();
  }, [props]);

  return (
    <div>
      <p>gg</p>
      {pieceListData ? <p>dd</p> : null}
    </div>
  );
}

// const RpContainer = styled.div`
//   -webkit-box-sizing: border-box;
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
//   width: 100%;
//   // overflow: hidden;
// `;

// <div>
// <RpContainer>
//   <div
//     className="RpPieceStickerList"
//     style={{ width: "100%", height: "800px", position: "relative" }} // 스티커페이지 연결
//   >
//     {/* 롤링페이퍼 조각 리스트 */}
//     <div
//       className="pieceListPageContainer"
//       style={{ display: "flex", flexWrap: "wrap" }}
//     >
//       {pieceListData &&
//         pieceListData.map((piece, index) => {
//           if (piece) {
//             return (
//               <PieceContainer
//                 key={piece.uid}
//                 piece={piece}
//                 index={index}
//               />
//             );
//           }
//           return null;
//         })}
//     </div>
//     {/* 사용자들이 붙인 스티커 리스트 */}
//     <CompleteStickerList />
//   </div>
// </RpContainer>
// </div>
