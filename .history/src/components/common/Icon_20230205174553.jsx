import classNames from "classnames";

function Icon({ children, color, ...rest }) {
  return <button type="button" className={classNames("Icon", color)}>Icon</button>;
}

export default Icon;
