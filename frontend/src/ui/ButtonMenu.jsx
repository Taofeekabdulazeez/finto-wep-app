import Proptypes from "prop-types";

function ButtonMenu({ onClick, isOpen }) {
  return (
    <button className="z-30 lg:hidden" onClick={onClick}>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#fff"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#fff"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
}

ButtonMenu.propTypes = {
  onClick: Proptypes.func,
  isOpen: Proptypes.bool,
};

export default ButtonMenu;
