import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import Icon from "./Icon";
import pangpartyicon from "../../assets/pangpartyicon.png";
import pangpartyitext from "../../assets/pangpartytext.png";

function NavBar() {
  const [isAlarm, setIsActive] = useState(false);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const alarmHandler = () => {
    setIsActive(!isAlarm);
  };

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        margin: "15px 0px",
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
        {/* <Icon img="picon" />
        <Icon img="ptext" /> */}
        <img src={pangpartyicon} alt="icon" />
        <img src={pangpartyitext} alt="text" />
      </div>
      <Popover>
        <Icon img="alarm" isActive={isAlarm} onClick={alarmHandler} />
      </Popover>
    </nav>
  );
}