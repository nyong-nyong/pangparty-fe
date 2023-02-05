/** eslint-disable */
import classNames from "classnames";
import "./Button.scss";

function Button({ children, size, color, ...rest }) {
  return (
    <button
      type="button"
      className={classNames("Button", size, color)}
      {...rest}
      // 지정한 props 를 제외한 값들을 rest 라는 객체에 모아서 설정
      // rest 안에 있는 객체안에 있는 값들을 모두 <button> 태그에 설정
      // onClick시 사용
      // https://react.vlpt.us/styling/01-sass.html
    >
      {children}
    </button>
  );
}
<Button size="small" ></Button>

Button.defaultProps = {
  size: "large",
  color: "gray",
};

export default Button;
