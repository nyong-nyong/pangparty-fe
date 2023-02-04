import "./Button.scss";

function Button({ children, size }) {
  return (
    <button type="button" className="Button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
