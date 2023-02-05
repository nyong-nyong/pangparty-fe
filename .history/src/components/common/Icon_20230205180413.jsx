import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, img, ...rest }) {
  return (
    <button type="button" className={classNames("Icon", color, img)} {...rest}>
    </button>
      {children}
  );
}

Icon.defaultProps = {
  color: "gray-3",
};

export default Icon;
