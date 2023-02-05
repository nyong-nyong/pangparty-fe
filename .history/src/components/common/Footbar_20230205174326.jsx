import { Link } from "react-router-dom";
import classNames from "classnames";
import "./Footbar.scss";

function Footbar() {
  return (
    <footer className="footer">
      <Link to="/">
        <button className={classNames("footerbutton", color)} {...type="button">
          홈
        </button>
      </Link>
      <Link to="/">
        <button className="footerbutton" type="button">
          피드
        </button>
      </Link>
      <Link to="/event/tagmember">
        <button className="footerbutton" type="button">
          이벤트 생성
        </button>
      </Link>
      <Link to="/event/tagmember">
        <button className="footerbutton" type="button">
          검색
        </button>
      </Link>
      <Link to="/event/tagmember">
        <button className="footerbutton" type="button">
          내 정보
        </button>
      </Link>
    </footer>
  );
}

export default Footbar;
