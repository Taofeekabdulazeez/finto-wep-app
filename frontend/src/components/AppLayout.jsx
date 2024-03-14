import { Outlet } from "react-router-dom";
import Main from "./Main";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="lg:grid lg:grid-cols-[.2fr_1fr] h-[100dvh]">
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
