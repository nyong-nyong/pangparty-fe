import classNames from "classnames";
import "./Icon.scss";

function Icon({ isActive, children, img, ...rest }) {
  return (
    <div className="iconContainer" {...rest}>
      {children ? (
        // 글자 있을 때(children)
        <>
          <div className={classNames("Img", img, { isActive })} />
          <p className="iconText">{children}</p>
        </>
      ) : (
        // 아이콘만 있을때
        <div className={classNames("Img", img, { isActive })} />
      )}
    </div>
  );
}

export default Icon;
