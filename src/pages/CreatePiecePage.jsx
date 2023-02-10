// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  memberIdState,
  writerNameState,
  contentState,
  bgColorState,
  textColorState,
  fontFamilyState,
  textAlignState,
} from "../recoils/createPiece/Atoms";
import RpThemeChange from "../components/CreatePiece/RpThemeChange";
import PieceContent from "../components/CreatePiece/PieceContent";
import axios from "../api/axios";
import requests from "../api/requests";
import "../components/CreatePiece/CreatePiece.css";

// 롤링페이퍼 작성하는 페이지

/*
구조 참고:
CreatedPiecePage - PieceContent (내용과 작성자)
                 - RpThemeChange (변경할 테마 선택) - ThemeFont
                                                   - ThemeAlign
                                                   - ThemeColors -> BgColorChange, TextColorChange
*/

export default function CreatePiecePage() {
  // post 하기 위한 정보
  const memberId = useRecoilValue(memberIdState);
  const writerName = useRecoilValue(writerNameState);
  const content = useRecoilValue(contentState);
  const bgColor = useRecoilValue(bgColorState);
  const textColor = useRecoilValue(textColorState);
  const fontFamily = useRecoilValue(fontFamilyState);
  const textAlign = useRecoilValue(textAlignState);

  const params = useParams();

  // api post
  const postEvent = async () => {
    const postInfo = {
      memberId,
      writerName,
      content,
      bgColor,
      fontFamily,
      textColor,
      textAlign,
    };

    // rp uid값 추후 수정 필요합니다.
    await axios
      .post(requests.events.rollingPaper.postPiece(params.eventId, 777777), {
        // 서버 test용
        // .post(requests.events.rollingPaper.postPiece(7, 1), {
        data: postInfo,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="createPieceContainer">
      <PieceContent />
      <RpThemeChange />
      <button type="submit" onClick={postEvent}>
        작성완료
      </button>
      <Link to={`/events/${params.eventId}/rollingpaper`}>피스리스트로</Link>
    </div>
  );
}
