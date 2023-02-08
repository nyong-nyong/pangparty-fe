import classNames from "classnames";
import "./Icon.<i class="fa fa-scissors" aria-hidden="true"></i>"

function Icon({ children, color, ...rest }) {
  return (
    <button type="button" className={classNames("Icon", color)} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  color: "gray-4",
};

export default Icon;
