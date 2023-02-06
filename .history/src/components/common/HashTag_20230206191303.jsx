/** eslint-disable */
import classNames from "classnames";
import "./Button.scss";

function HashTag({ children, color, ...rest }) {
  return (
    <button type="button" className={classNames("HashTag", color)} {...rest}>
      {children}
    </button>
  );
}

HashTag.defaultProps = {
  color: "orange",
};

export default HashTag;
