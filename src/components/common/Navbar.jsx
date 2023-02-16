/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { authState } from "../../recoils/user/Atoms";
import Icon from "./Icon";
import useUserAction from "../../hooks/useUserAction";
import pangpartyicon from "../../assets/pangpartyicon.png";
import pangpartyitext from "../../assets/pangpartytext.png";
import "./Navbar.scss";

export default function NavBar() {
  const [isAlarm, setIsAlarm] = useState(false);

  const navigate = useNavigate();

  const authInfo = useRecoilValue(authState);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  // const logoutSwal = withReactContent(Swal);

  const userAction = useUserAction();
  const logOut = (e) => {
    e.preventDefault();
    userAction.logOut();
    // logoutSwal.fire(<p>잘가세여</p>);
    Swal.fire("다음에 또 만나요!");
  };

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "5px",
        fontSize: "25px",
      }}
    >
      <Icon img="prev" onClick={handleGoBack} />
      <div
        className="logo"
        onClick={handleGoHome}
        aria-hidden="true"
        style={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
        }}
      >
        <img src={pangpartyicon} alt="icon" />
        <img src={pangpartyitext} alt="text" />
      </div>
      <Popover
        isOpen={isAlarm}
        onClickOutside={() => setIsAlarm(!isAlarm)}
        positions={["bottom"]}
        content={() => (
          <div className="alarmPopoverContainer">
            {authInfo ? (
              <button type="button" className="alarmcenterBtn" onClick={logOut}>
                로그아웃
              </button>
            ) : (
              <div>
                <Link to="/login">
                  <button type="button" className="alarmcenterBtn">
                    로그인
                  </button>
                </Link>
                <hr />
                <Link to="/signup/email">
                  <button type="button" className="alarmcenterBtn">
                    회원가입
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      >
        <div>
          <Icon
            img="setting"
            isActive={isAlarm}
            onClick={() => setIsAlarm(!isAlarm)}
          />
        </div>
      </Popover>
    </nav>
  );
}
