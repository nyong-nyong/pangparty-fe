/* eslint-disable import/no-extraneous-dependencies */
import JSConfetti from "js-confetti";
import giftPangOpened from "../../assets/giftPangOpened.png";

export default function Confetti() {
  // HTML Canvas 요소를 생성하여 페이지에 추가
  const jsConfetti = new JSConfetti();

  // 색종이 커스터마이징
  const handleClick = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      // emojis: ["💖", "✨", "🥳", "🎊", "🍰", "🦋"],
      confettiRadius: 5,
      confettiNumber: 250,
    });
  };

  return (
    <button className="moveButton" type="button" onClick={handleClick}>
      <img className="touchImg" src={giftPangOpened} alt="pangimage" />
    </button>
  );
}
