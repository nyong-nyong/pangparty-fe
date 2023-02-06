import classNames from "classnames";
import "./Icon.scss";

function Icon({ isActive, children, img, ...rest }) {
  return (
    <div className="iconContainer" {...rest}>
      <div className={classNames("Img", img, { isActive })} />
      {/* <div className="iconButton" type="button" /> */}
      <p className="iconText">{children}</p>
    </div>
  );
}

Icon.defaultProps = {
  color: "gray-3",
};

export default Icon;
