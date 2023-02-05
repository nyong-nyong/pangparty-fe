import { useNavigate } from "react-router-dom";
import pangpartyicon from "../../../public/image/pangpartyicon.png";
import pangpartyitext from "../../../public/image/pangpartyicon.png";

function NavBar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        margin: "15px 0px",
        fontSize: "25px",
      }}
    >
      <button
        type="button"
        name="back"
        onClick={handleGoBack}
        style={{ all: "unset" }}
      >
        ◀
      </button>
      <div className="logo" onClick={handleGoHome} aria-hidden="true">
        <img src={pangpartyicon} alt="icon" />
        <img src={pangpartyitext} alt="text" />
      </div>
      <button
        type="button"
        name="back"
        onClick={handleGoBack}
        style={{ all: "unset" }}
      >
        ▶
      </button>
    </nav>
  );
}

export default NavBar;
