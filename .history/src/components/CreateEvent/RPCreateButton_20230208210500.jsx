import add from "../../assets/addRP.svg";

function RpCreateButton() {
  return (
    <div style={{ background: "aqua" }}>
      <button style={{ backgroundImage: url(add) }}></button>
    </div>
  );
}

export default RpCreateButton;
