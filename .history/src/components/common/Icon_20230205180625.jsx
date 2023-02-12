import classNames from "classnames";
import "./Icon.scss";

function Icon({ children, color, img, ...rest }) {
  return (
    <div style={{di}}>
      <button
        type="button"
        className={classNames("Icon", color, img)}
        {...rest}
      />
      <div>{children}</div>
    </div>
  );
}

Icon.defaultProps = {
  color: "gray-3",
};

export default Icon;