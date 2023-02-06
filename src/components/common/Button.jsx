/** eslint-disable */
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, ...rest }) {
  return (
    <button
      type="button"
      className={classNames("commonButton", size, color)}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "large",
  color: "gray",
};

export default Button;
