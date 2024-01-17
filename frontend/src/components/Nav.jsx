import Proptypes from "prop-types";
import Link from "../ui/Link";
import Button from "../ui/Button";

function Nav({ isOpen }) {
  return (
    <nav
      className={`bg-primary-shade fixed h-[100vh] inset-0 z-20 translate-y-[-100%] transition-[transform] flex flex-col items-center gap-20 pt-20 ${
        isOpen ? "translate-y-[0]" : ""
      }`}
    >
      <ul className="flex flex-col gap-6 items-center">
        <li>
          <Link>Features</Link>
        </li>
        <li>
          <Link>Solutions</Link>
        </li>
        <li>
          <Link>Customers</Link>
        </li>
        <li>
          <Link>Resources</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
      </ul>

      <ul className="flex flex-col gap-4 items-center">
        <li className="">
          <Button type="inverted">Sign In</Button>
        </li>
        <li>
          <Button type="primary">Open an Account</Button>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  isOpen: Proptypes.bool,
};

export default Nav;
