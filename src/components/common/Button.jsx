/** eslint-disable */
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, ...rest }) {
  return (
    <button
      type="button"
      className={classNames("Button", size, color)}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "large",
  color: "gray-4",
};

export default Button;
