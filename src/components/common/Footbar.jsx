import { Link } from "react-router-dom";

function Footbar() {
  return (
    <footer className="footer">
      <Link to="/">
        <button className="footerbutton" type="button">
          🏡홈
        </button>
      </Link>
      <Link to="/">
        <button className="footerbutton" type="button">
          🌼피드
        </button>
      </Link>
      <Link to="/event/tagmember">
        <button className="footerbutton" type="button">
          🎉이벤트 생성
        </button>
      </Link>
    </footer>
  );
}

export default Footbar;
