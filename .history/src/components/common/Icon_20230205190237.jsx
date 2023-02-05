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
function Icon({ children, color, img, ...rest }) {
  return (
    <div>
      <button type="button">
        <img src="" alt="" />
        
        <span>{children}</span>
      </button>
    </div>
  );
}

Icon.defaultProps = {
  img: "home",
  color: "gray-3",
};

export default Icon;
