import Icon from "../common/Icon";
import add from "../../assets/addRP.svg";

function RpCreateButton() {
  return (
    <div style={{ background: "aqua" }}>
      <button style={{ backgroundImage: `${add}` }}></button>
    </div>
  );
}

export default RpCreateButton;
