import PropTypes from "prop-types";

function Button({ children = "click", type = "primary", onClick }) {
  if (type === "primary")
    return (
      <button
        onClick={onClick}
        className="text-lg font-semibold bg-[#9FE870] text-stone-900 px-6 py-3 rounded-full"
      >
        {children}
      </button>
    );

  if (type === "inverted")
    return (
      <button
        onClick={onClick}
        className="text-lg font-semibold bg-[#fff] text-stone-900 px-6 py-3 rounded-full"
      >
        {children}
      </button>
    );
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
