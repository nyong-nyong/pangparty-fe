// import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  // memberIdState,
  writerNameState,
  contentState,
  bgColorState,
  textColorState,
  fontFamilyState,
  textAlignState,
} from "../recoils/createPiece/Atoms";
import { userState } from "../recoils/user/Atoms";
import RpThemeChange from "../components/CreatePiece/RpThemeChange";
import PieceContent from "../components/CreatePiece/PieceContent";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/CreatePiecePage.scss";
import Button from "../components/common/Button";

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
  const memberId = useRecoilValue(userState);
  const writerName = useRecoilValue(writerNameState);
  const content = useRecoilValue(contentState);
  const bgColor = useRecoilValue(bgColorState);
  const textColor = useRecoilValue(textColorState);
  const fontFamily = useRecoilValue(fontFamilyState);
  const textAlign = useRecoilValue(textAlignState);

  const params = useParams();
  const navigate = useNavigate();

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
        // 배포 후 주소 수정 필요합니다.
        navigate(`events/${params.eventId}/rollingpaper`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="createPieceContainer">
        <PieceContent />
        <RpThemeChange />
      </div>
      {content && writerName ? (
        <Button color="orange-1" type="submit" onClick={postEvent}>
          작성완료
        </Button>
      ) : (
        <Button type="submit">작성완료</Button>
      )}
    </div>
  );
}
