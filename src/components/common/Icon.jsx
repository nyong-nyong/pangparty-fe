import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, img, ...rest }) {
  return (
    <div className="iconContainer">
      <div className={classNames("Img", img)} />
      <button className="iconButton" type="button" {...rest} />
      <span className="iconText">{children}</span>
    </div>
  );
}

Icon.defaultProps = {
  color: "gray-3",
};

export default Icon;
