import Proptypes from "prop-types";

function Link({ children = "link" }) {
  return (
    <a href="#" className="font-semibold no-underline text-[#fff]">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: Proptypes.string,
};

export default Link;
