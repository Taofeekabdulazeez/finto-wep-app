import {
  HiHome,
  HiOutlineArchive,
  HiOutlineDocumentReport,
  HiOutlineMail,
  HiOutlineSparkles,
  HiOutlineUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="bg-[#FAFAFA] px-4 py-3">
      <div className="flex items-center justify-between mb-6">
        <span>Finto</span>
        <button>👈</button>
      </div>

      <nav>
        <ul className="[&>*]:px-3 [&>*]:py-1.5 [&>*]:text-[.9rem] flex flex-col gap-1">
          <li>
            <Link
              to="/app"
              className="flex items-center gap-2 link:text-[#666] active:text-[#000] hover:text-[#000]"
            >
              <HiHome size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 link:text-[#666] active:text-[#000] hover:text-[#000]"
            >
              <HiOutlineMail size={20} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HiOutlineArchive size={20} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HiOutlineUser size={20} />
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HiOutlineDocumentReport size={20} />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center gap-2">
              <HiOutlineSparkles size={20} />
              <span>Marketing</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
