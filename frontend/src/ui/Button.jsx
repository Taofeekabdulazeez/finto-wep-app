import PropTypes from "prop-types";

function Button({ children = "click" }) {
  return (
    <button className="text-xl font-semibold bg-[#9FE870] text-stone-900 px-6 py-3 rounded">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
