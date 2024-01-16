import { useEffect, useRef, useState } from "react";
import ButtonMenu from "../ui/ButtonMenu";
import Logo from "../ui/Logo";
// import Nav from "./Nav";

function Header() {
  const [isIntersecting, setIsintersecting] = useState(true);
  const ref = useRef(null);

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          setIsintersecting(entry.isIntersecting);

          console.log({ isIntersecting });
        },
        {
          root: null,
          threshold: [0],
          rootMargin: `-${ref.current.getBoundingClientRect().height}px`,
        },
      );

      observer.observe(document.querySelector("section"));

      return () => observer.disconnect();
    },
    [isIntersecting, ref],
  );
  return (
    <header
      ref={ref}
      className={`bg-primary-shade flex items-center justify-between px-4 py-2 w-full z-10 ${
        isIntersecting ? "" : "fixed"
      }`}
    >
      <Logo />
      {/* <Nav /> */}
      <ButtonMenu />
    </header>
  );
}

export default Header;
