import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, img, ...rest }) {
  return (
    <div>
      <img
        type="button"
        className={classNames("Icon", color, img)}
        {...rest}
      />
      <span>{children}</span>
    </div>
  );
}

Icon.defaultProps = {
  img: "home",
  color: "gray-3",
};

export default Icon;
