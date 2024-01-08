import PropTypes from "prop-types";

function Button({ children = "click" }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
