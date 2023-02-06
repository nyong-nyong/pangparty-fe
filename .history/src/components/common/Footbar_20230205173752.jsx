import { Link } from "react-router-dom";
import "../../assets/homeIcon.svg";
import "../../assets/feedIcon.svg";
import "../../assets/createIcon.svg";
import "../../assets/searchIcon.svg";
import "../../assets/homeIcon.svg";


function Footbar() {
  return (
    <footer className="footer">
      <Link to="/">
        <button className="footerbutton" type="button">
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
