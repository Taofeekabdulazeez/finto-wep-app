import Main from "./Main";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="lg:grid lg:grid-cols-[auto_1fr] h-[100dvh]">
      <SideBar />
      <Main />
    </div>
  );
}

export default AppLayout;
