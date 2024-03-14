import Proptypes from "prop-types";
import Link from "../ui/Link";
import Button from "../ui/Button";

function Nav({ isOpen }) {
  return (
    <nav
      className={`bg-primary-shade fixed lg:static h-[100vh] lg:h-auto inset-0 z-20 translate-y-[-100%] transition-[transform] lg:translate-x-[none] flex flex-col lg:flex-row items-center lg:justify-between lg:w-full gap-20 pt-20 lg:pt-0 ${
        isOpen ? "translate-y-[0]" : ""
      }`}
    >
      <ul className="flex flex-col lg:flex-row gap-6 items-center">
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

      <ul className="flex flex-col lg:flex-row gap-4 items-center">
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
