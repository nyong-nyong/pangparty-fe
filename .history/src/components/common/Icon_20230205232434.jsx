import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, ...rest }) {
  return (
    <div>
      <button type="button">
        <img
          src="../..//assets/homeIcon.svg"
          alt=""
          className={classNames("Icon", color)}
          {...rest}
        />
        {children}
      </button>
    </div>
  );
}

Icon.defaultProps = {
  img: "home",
  color: "gray-3",
};

export default Icon;
