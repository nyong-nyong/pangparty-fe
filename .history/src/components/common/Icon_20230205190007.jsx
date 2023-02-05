import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, img, ...rest }) {
  return (
    <div>
      <button
        type="button"
        className={classNames("Icon", color, img)}
        {...rest}
      />
      <img src="../../assets/homeIcon.svg" alt="" />
      <span>{children}</span>
    </div>
  );
}

Icon.defaultProps = {
  img: "home",
  color: "gray-3",
};

export default Icon;
