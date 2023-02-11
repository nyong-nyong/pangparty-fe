/* eslint-disable */

const addStyle = {
  backgroundImage: "url("../../assets/addRP.svg"),
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
