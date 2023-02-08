import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, ...rest }) {
  return (
    <button type="button" className={classNames("Icon", color)} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "gray-3",
};

export default Icon;
