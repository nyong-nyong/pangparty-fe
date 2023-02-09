/* eslint-disable */
import "./RpCreateButton.scss";

function RpCreateButton({ ...props }) {
  return (
    <div className="addBtnContainer">
      <button className="addBtnImg" {...props} />
    </div>
  );
}

export default RpCreateButton;
