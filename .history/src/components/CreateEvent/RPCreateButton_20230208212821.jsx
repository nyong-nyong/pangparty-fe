/* eslint-disable */
import addRP from "../../assets/addRP.svg";

const addBtnStyle = {
  width: "50px",
  height: "50px",
};

const addStyle = {
  backgroundImage: `url(${addRP})`,
  width: "50px",
  height: "50px",
  backgroundColor: "transparent",
};

function RpCreateButton() {
  return (
    <div className="addBtnContainer" style={addBtnStyle}>
      <button style={addStyle} />
    </div>
  );
}

export default RpCreateButton;
