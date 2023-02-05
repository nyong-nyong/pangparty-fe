import classNames from "classnames";

function Icon({ children, color, ...rest }) {
  return (
    <button type="button" className={classNames("Icon", color)} {...rest}>
      Icon
    </button>
  );
}

export default Icon;
