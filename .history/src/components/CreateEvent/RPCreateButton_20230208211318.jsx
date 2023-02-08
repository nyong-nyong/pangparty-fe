/* eslint-disable */
import "../../assets/addRP.svg"

const addStyle = {
  backgroundImage: "../../assets/addRP.svg",
  width: "50px",
  height: "50px",
};

function RpCreateButton() {
  return (
    <div style={{ background: "aqua" }}>
      <button style={addStyle} />
    </div>
  );
}

export default RpCreateButton;
