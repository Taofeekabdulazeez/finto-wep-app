import ButtonMenu from "../ui/ButtonMenu";
import Logo from "../ui/Logo";
// import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-primary-shade flex items-center justify-between px-4 py-2">
      <Logo />
      {/* <Nav /> */}
      <ButtonMenu />
    </header>
  );
}

export default Header;
