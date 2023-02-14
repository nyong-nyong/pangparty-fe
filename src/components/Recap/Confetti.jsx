/* eslint-disable import/no-extraneous-dependencies */
import JSConfetti from "js-confetti";
import giftPangImg from "../../assets/giftPang.png";

export default function Confetti(props) {
  const { touchCount, setTouchCount } = props;
  // HTML Canvas 요소를 생성하여 페이지에 추가
  const jsConfetti = new JSConfetti();

  // 색종이 커스터마이징
  const handleClick = () => {
    // if (touchCount <= 20) e.preventDefault();
    const newCount = touchCount + 1;
    // console.log(touchCount);
    setTouchCount(newCount);
    jsConfetti.addConfetti({
      // confettiColors: [
      //   "#ff0a54",
      //   "#ff477e",
      //   "#ff7096",
      //   "#ff85a1",
      //   "#fbb1bd",
      //   "#f9bec7",
      // ],
      emojis: ["💖", "✨", "🥳", "🎊", "🍰", "🦋"],
      confettiRadius: 5,
      confettiNumber: 40,
    });
  };

  return (
    <button className="moveButton" type="button" onClick={handleClick}>
      <img
        className="touchImg"
        style={{ width: 200 + touchCount * 3 }}
        src={giftPangImg}
        alt="pangimage"
      />
    </button>
  );
}
