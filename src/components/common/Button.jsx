import classNames from "classnames";
import "./Button.scss";

function Button({ children, size }) {
  return (
    <button type="button" className={classNames("Button", size)}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
