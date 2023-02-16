import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { stickerListState } from "../Sticker/Atom";
import PieceContainer from "../CreatePiece/PieceContainer";
import CompleteStickerList from "../Sticker/CompleteStickerList";

export default function PieceListPage(props) {
  const [pieceListData, setPieceListData] = useState(undefined);
  // const [recapStickerList, setRecapStickerList] = useState(undefined);
  const setStickerListData = useSetRecoilState(stickerListState);

  useEffect(() => {
    // 롤페 피스 목록, 스티러 리스트 저장

    console.log(", bb");
    if (!props) return;
    console.log(props);
    setPieceListData(props.eventInfo.rollingPaperPieceList);
    // setRecapStickerList(props.eventInfo.rollingPaperStickerList);
    setStickerListData(props.eventInfo.rollingPaperPieceStickerList);
    // const rpUid = props.eventIntroduce.rollingPaperUid;
    // const eventUid = props.params.eventId;
    console.log(props.eventInfo.rollingPaperPieceList);
  }, [props]);

  return (
    <div>
      <RpContainer>
        <div
          className="RpPieceStickerList"
          style={{ width: "100%", height: "auto", position: "relative" }} // 스티커페이지 연결
        >
          {/* 롤링페이퍼 조각 리스트 */}
          <div
            className="pieceListPageContainer"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {pieceListData &&
              pieceListData.map((piece, index) => {
                if (piece) {
                  return (
                    <PieceContainer
                      key={piece.uid}
                      piece={piece}
                      index={index}
                    />
                  );
                }
                return null;
              })}
          </div>
          {/* 사용자들이 붙인 스티커 리스트 */}
          <CompleteStickerList />
        </div>
      </RpContainer>
    </div>
  );
}

const RpContainer = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  // overflow: hidden;
`;
