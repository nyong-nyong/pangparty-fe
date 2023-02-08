import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CSSTransition } from "react-transition-group";
import giftPangImg from "../assets/giftPang.png";
import giftPangOpened from "../assets/giftPangOpened.png";
// import touchMent from "../assets/touchMent.png";
import touch1 from "../assets/touch1.png";
import touch2 from "../assets/touch2.png";
import touch3 from "../assets/touch3.png";
import touch4 from "../assets/touch4.png";
import goUpIcon from "../assets/goUpIcon.png";
import "../styles/GiftIntroPage.scss";

export default function GiftIntroPage() {
  // 유저 정보 받아오기

  // 오늘 날짜
  const todayInfo = new Date();
  // const today = todayInfo.getFullYear();

  const navigate = useNavigate();

  // Touch 정보 저장
  const [touchCount, setTouchCount] = useState(1);

  const countTouch = (e) => {
    if (touchCount <= 20) e.preventDefault();
    const newCount = touchCount + 1;
    console.log(touchCount);
    setTouchCount(newCount);
  };

  const nextPage = (e) => {
    console.log(e.changedTouches[0].screenX);
    const userMovement = e.changedTouches[0].screenX;
    if (userMovement > 390) {
      navigate("/gift/recap/1");
    }
    navigate("/gift/recap/1");
  };

  return (
    <CSSTransition
      in={1}
      timeout={400}
      classNames="page-transition"
      unmountOnExit
    >
      <div className="giftIntroContainer">
        <header className="giftHeader">
          <p style={{ marginBottom: "0px" }}>누구누구님을 위해 완성된</p>
          <p style={{ marginTop: "4px", fontWeight: "bolder" }}>
            축하 선물을 열어보세요.
          </p>
        </header>
        <div className="contentContainer">
          {touchCount < 20 && (
            <div className="moveContainer">
              <p className="moveText">TOUCH!</p>
              <button className="moveButton" type="button" onClick={countTouch}>
                <img
                  className="touchImg"
                  style={{ width: 200 + touchCount * 3 }}
                  src={giftPangImg}
                  alt="pangimage"
                />
              </button>
            </div>
          )}
          {(() => {
            if (touchCount >= 2 && touchCount !== 20) {
              return <img className="touchSticker1" src={touch1} alt="" />;
            }
            return null;
          })()}
          {(() => {
            if (touchCount >= 5 && touchCount !== 20) {
              return <img className="touchSticker3" src={touch3} alt="" />;
            }
            return null;
          })()}
          {(() => {
            if (touchCount >= 10 && touchCount !== 20) {
              return <img className="touchSticker2" src={touch2} alt="" />;
            }
            return null;
          })()}
          {(() => {
            if (touchCount >= 15 && touchCount !== 20) {
              return <img className="touchSticker4" src={touch4} alt="" />;
            }
            return null;
          })()}
          {touchCount === 20 && (
            <motion.div
              animate={{ scale: [1, 1.3, 1, 1.2, 1] }}
              whileHover={{ scale: [1, 1.3, 1, 1.2, 1] }}
              className="moveContainer"
            >
              <button className="moveButton" type="button">
                <img src={giftPangOpened} alt="pangimage" />
              </button>
            </motion.div>
          )}
        </div>
        <div className="dayInfoContainer">
          <p style={{ fontSize: "13px", marginBottom: "0px" }}>오늘은 D-DAY</p>
          <p style={{ fontSize: "19px", marginTop: "0px", color: "#FF7A5C" }}>
            {todayInfo.toLocaleDateString()}
          </p>
        </div>

        <div className="mentContainer">
          {(() => {
            if (touchCount < 10) {
              return (
                <p className="touchMent">선물이 열릴 때까지 터치해 주세요!</p>
              );
            }
            if (touchCount >= 10 && touchCount < 20) {
              return <p className="touchMent">조금만 더요!</p>;
            }
            return (
              <div>
                <p style={{ marginBottom: "10%" }}>
                  위로 올려 선물을 수령해주세요
                </p>
                <img
                  className="goUpIcon"
                  src={goUpIcon}
                  onTouchEnd={nextPage}
                  alt=""
                />
              </div>
            );
          })()}
        </div>
      </div>
    </CSSTransition>
  );
}
