import { useEffect, useRef, useState } from "react";
import ButtonMenu from "../ui/ButtonMenu";
import Logo from "../ui/Logo";
import Nav from "./Nav";

function Header() {
  const [isIntersecting, setIsintersecting] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ref = useRef(null);

  function handleMobileNav() {
    setIsNavOpen((open) => !open);
  }

  useEffect(
    function () {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          setIsintersecting(entry.isIntersecting);
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
      className={`bg-primary-shade flex items-center justify-between px-5 py-3 w-full z-10 transition-all ${
        isIntersecting ? "" : "fixed opacity-[0.95]"
      }`}
    >
      <Logo />
      <Nav isOpen={isNavOpen} />
      <ButtonMenu onClick={handleMobileNav} isOpen={isNavOpen} />
    </header>
  );
}

export default Header;
