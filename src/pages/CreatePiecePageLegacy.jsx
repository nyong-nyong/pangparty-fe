// import { useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import {
//   memberIdState,
//   writerNameState,
//   contentState,
//   bgColorState,
//   textColorState,
//   fontFamilyState,
//   textAlignState,
// } from "../recoils/createPiece/Atoms";
// import RpThemeChange from "../components/CreatePiece/RpThemeChange";
// import PieceContent from "../components/CreatePiece/PieceContent";
// import axios from "../api/axios";
// import requests from "../api/requests";
// import "../components/CreatePiece/CreatePiece.css";

// // 롤링페이퍼 작성하는 페이지

// export default function CreatePiecePage() {
//   // post 하기 위한 정보
//   const memberId = useRecoilValue(memberIdState);
//   const writerName = useRecoilValue(writerNameState);
//   const content = useRecoilValue(contentState);
//   const bgColor = useRecoilValue(bgColorState);
//   const textColor = useRecoilValue(textColorState);
//   const fontFamily = useRecoilValue(fontFamilyState);
//   const textAlign = useRecoilValue(textAlignState);

//   const params = useParams();

//   // api post
//   const postEvent = async () => {
//     const postInfo = {
//       memberId,
//       writerName,
//       content,
//       bgColor,
//       fontFamily,
//       textColor,
//       textAlign,
//     };

//     // 주소 수정하기
//     await axios
//       .post(requests.events.postEvent, {
//         data: postInfo,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // 테마 변경 활성화 여부
//   const [themeChange, setThemeChange] = useState({
//     font: false,
//     align: false,
//     color: false,
//   });

//   // 작성 완료시 api post 이벤트 발생으로 수정 예정
//   const postPiece = (e) => {
//     e.preventDefault();
//     console.log(pieceContent);
//   };

//   // 테마 변경을 위한 버튼
//   const themeChangeHandler = (e) => {
//     const newThemeChange = {
//       font: false,
//       align: false,
//       color: false,
//     };
//     newThemeChange[e.target.value] = true;
//     setThemeChange(newThemeChange);
//   };

//   return (
//     <div className="createPieceContainer">
//       {/* 상단 좌우 이동 버튼 임시 제작 */}
//       <div className="createPiecePageHeader">
//         <button type="button">이전</button>
//         <h4>롤링페이퍼 작성페이지</h4>
//         <button type="button" onClick={postPiece}>
//           다음
//         </button>
//       </div>

//       <PieceContent />

//       {/* 버튼 눌렀을 때 그 버튼 기능에 맞는 compnent만 렌더링 합니다. */}
//       <div className="buttonContainer">
//         <button
//           type="button"
//           className="changeButton"
//           id="fontChangeButton"
//           value="font"
//           onClick={themeChangeHandler}
//         >
//           T
//         </button>
//         <button
//           type="button"
//           className="changeButton"
//           id="alignChangeButton"
//           value="align"
//           onClick={themeChangeHandler}
//         >
//           정렬
//         </button>
//         <button
//           type="button"
//           className="changeButton"
//           id="colorChangeButton"
//           value="color"
//           onClick={themeChangeHandler}
//         >
//           컬러
//         </button>
//       </div>

//       <RpThemeChange />

//       <button type="submit" onClick={postEvent}>
//         작성완료
//       </button>

//       <Link to={`/events/${params.eventId}/rollingpaper`}>
//         <button type="button" style={{ marginTop: "20px" }}>
//           피스리스트로 가는 임시 이동 버튼
//         </button>
//       </Link>
//     </div>
//   );
// }
