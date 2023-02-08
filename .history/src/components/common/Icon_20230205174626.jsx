import classNames from "classnames";

function Icon({ children, color, ...rest }) {
  return (
    <button type="button" className={classNames("Icon", color)} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "large",
  color: "gray-4",
};

export default Icon;
