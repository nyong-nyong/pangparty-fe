/* eslint-disable */
import addRP from "../../assets/addRP.svg";

const 

const addStyle = {
  backgroundImage: `url(${addRP})`,
  width: "50px",
  height: "50px",
  backgroundColor: "transparent",
};

function RpCreateButton() {
  return (
    <div className="addBtnContainer" style={{ background: "aqua"}}>
      <button style={addStyle} />
    </div>
  );
}

export default RpCreateButton;
