import Proptypes from "prop-types";

function Main({ children }) {
  return <div className="text-center">{children}</div>;
}

export default Main;

Main.propTypes = {
  children: Proptypes.func,
};
