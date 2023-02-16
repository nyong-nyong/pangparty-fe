import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import Confetti from "../Recap/Confetti";
import ConfettiPang from "../Recap/ConfettiPang";
import Button from "../common/Button";
// import giftPangImg from "../../assets/giftPang.png";
// import giftPangOpened from "../../assets/giftPangOpened.png";
// import touchMent from "../assets/touchMent.png";
import touch1 from "../../assets/touch1.png";
import touch2 from "../../assets/touch2.png";
import touch3 from "../../assets/touch3.png";
import touch4 from "../../assets/touch4.png";
import goDown from "../../assets/goDown.svg";
import "../../styles/GiftIntroPage.scss";

export default function GiftIntro(props) {
  const { userName, dDay, setIsOpened } = props;
  // const { userName, dDay, eventId, setIsOpened } = props;
  // 유저 정보, 디데이 받아오기

  // const navigate = useNavigate();

  // Touch 정보 저장
  const [touchCount, setTouchCount] = useState(1);

  // const countTouch = (e) => {
  //   if (touchCount <= 20) e.preventDefault();
  //   const newCount = touchCount + 1;
  //   // console.log(touchCount);
  //   setTouchCount(newCount);
  // };

  const openRecap = () => {
    setIsOpened(true);
    document
      .querySelector(".recapTitleDday")
      .scrollIntoView({ behavior: "smooth" });
  };

  const goDownHandler = () => {
    document
      .querySelector(".recapTitleDday")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="giftIntroContainer">
        <header className="giftHeader">
          <p style={{ marginBottom: "0px" }}>{userName}님을 위해 완성된</p>
          <p style={{ marginTop: "4px", fontWeight: "bolder" }}>
            축하 선물을 열어보세요.
          </p>
        </header>
        <div className="contentContainer">
          {touchCount < 20 && (
            <div className="moveContainer">
              <p className="moveText">TOUCH!</p>
              <Confetti touchCount={touchCount} setTouchCount={setTouchCount} />
              {/* <button className="moveButton" type="button" onClick={countTouch}>
                <img
                  className="touchImg"
                  style={{ width: 200 + touchCount * 3 }}
                  src={giftPangImg}
                  alt="pangimage"
                />
              </button> */}
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
            // <motion.div
            //   animate={{ scale: [1, 1.3, 1, 1.2, 1] }}
            //   whileHover={{ scale: [1, 1.3, 1, 1.2, 1] }}
            //   className="moveContainer"
            // >
            //   <button className="moveButton" type="button">
            //     <img src={giftPangOpened} alt="pangimage" />
            //   </button>
            // </motion.div>
            <ConfettiPang />
          )}
        </div>
        <div className="dayInfoContainer">
          <p style={{ fontSize: "13px", marginBottom: "0px" }}>D-DAY</p>
          <p
            style={{
              fontSize: "19px",
              marginTop: "0px",
              marginBottom: "5px",
              color: "#FF7A5C",
            }}
          >
            {dDay}
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
                  선물 받기 버튼을 눌러주세요!
                </p>
                {/* <Link to={`/gift/${eventId}/recap`}>
                  <Button color="orange-1">선물 받기</Button>
                </Link> */}
                <Button color="orange-1" onClick={openRecap}>
                  아래에서 선물 받기
                </Button>
                <button
                  type="button"
                  onClick={goDownHandler}
                  style={{
                    backgroundColor: "inherit",
                    border: "none",
                    marginTop: "15px",
                  }}
                >
                  <img className="giftIntrodownIcon" src={goDown} alt="" />
                </button>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
