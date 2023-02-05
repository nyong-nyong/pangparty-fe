import classNames from "classnames";
import "./Icon.scss";

// function Icon({ children, color, img, ...rest }) {
//   return (
//     <div>
//       <button
//         type="button"
//         className={classNames("Icon", color, img)}
//         {...rest}
//       />
//       <span>{children}</span>
//     </div>
//   );
function Icon({ children, color, ...rest }) {
  return (
    <div>
      <button type="button">
        <img
          src="../../assets/homeIcon.svg"
          alt=""
          className={classNames("Icon", color)}
          {...rest}
        />
        {children}</span>
      </button>
    </div>
  );
}

Icon.defaultProps = {
  img: "home",
  color: "gray-3",
};

export default Icon;
