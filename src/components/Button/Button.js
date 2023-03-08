import "./Button.css"
function Button({ type, text }) {
  return (
    <button type={type} className="submit-button">
      {text}
    </button>
  );
}

export default Button;
