import { useState } from "react";
import { Link } from "react-router-dom";
import giftPangImg from "../assets/giftPang.png";
import giftPangOpened from "../assets/giftPangOpened.png";
// import giftBackground from "../assets/giftBackground.png";
import "../styles/GiftIntroPage.scss";

export default function GiftIntroPage() {
  // 유저 정보 받아오기

  // 오늘 날짜
  const todayInfo = new Date();
  // const today = todayInfo.getFullYear();

  // Touch 정보 저장
  const [touchCount, setTouchCount] = useState(1);

  const countTouch = (e) => {
    if (touchCount <= 20) e.preventDefault();
    const newCount = touchCount + 1;
    console.log(touchCount);
    setTouchCount(newCount);
  };

  return (
    <div className="giftIntroContainer">
      <header>
        <p>누구누구님을 위해 완성된</p>
        <h4>축하 선물을 열어보세요.</h4>
      </header>
      <div className="contentContainer">
        {touchCount < 20 && (
          <div className="moveContainer">
            <h3 className="moveText">TOUCH!</h3>
            <button type="button" className="touchBox" onClick={countTouch}>
              <img
                className="touchImg"
                style={{ width: 200 + touchCount * 3 }}
                src={giftPangImg}
                alt="pangimage"
              />
            </button>
          </div>
        )}
        {touchCount === 20 && (
          <button type="button">
            <img src={giftPangOpened} alt="pangimage" />
          </button>
        )}
        <p>오늘은 D-DAY</p>
        <p>{todayInfo.toLocaleDateString()}</p>
      </div>
      {touchCount === 0 && <p>선물이 열릴 때까지 터치해 주세요!</p>}
      {touchCount > 10 && <h3>조금만 더요!</h3>}
      <Link to="/gift">
        <button type="button">이벤트 상세보기</button>
      </Link>
      <img
        className="tokomon1"
        src="https://images-kr.girlstyle.com/wp-content/uploads/2018/12/v84brvc2afb99918m2c5.jpg?auto=format&w=1242"
        alt=""
      />
      <img
        className="tokomon"
        src="https://images-kr.girlstyle.com/wp-content/uploads/2018/12/v84brvc2afb99918m2c5.jpg?auto=format&w=1242"
        alt=""
      />
    </div>
  );
}
