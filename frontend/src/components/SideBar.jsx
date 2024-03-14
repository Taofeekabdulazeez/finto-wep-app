import {
  HiHome,
  HiOutlineArchive,
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineMail,
  HiOutlinePencilAlt,
  HiOutlineSparkles,
  HiOutlineUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="bg-[#FAFAFA] px-3 py-1.5">
      <div className="flex items-center justify-between mb-6">
        <span>Finto</span>
        <button>👈</button>
      </div>

      <nav>
        <ul className="[&>*]:text-[.9rem] flex flex-col gap-2">
          <li>
            <Link
              to="/app/dashboard"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiHome size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/orders"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineMail size={20} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/products"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineArchive size={20} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/customer"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineUser size={20} />
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/reports"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineDocumentReport size={20} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/marketing"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineSparkles size={20} />
              <span>Marketing</span>
            </Link>
          </li>
        </ul>

        <ul className="[&>*]:text-[.9rem] flex flex-col gap-2 mt-[12rem]">
          <li>
            <Link
              to="/app/marketing"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlineCog size={20} />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/app/marketing"
              className="flex items-center px-3 py-1.5 gap-2 border-2 border-transparent rounded hover:bg-white active:bg-white hover:border-[#eee] active:border-[#eee] transition-all duration-75"
            >
              <HiOutlinePencilAlt size={20} />
              <span>Support</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
