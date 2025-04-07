import { useEffect, useState } from "react";
import useHamburgerScroll from "../hooks/useHamburgerScroll";
import useHamburgerObserver from "../hooks/useHamburgerObserver";
import Menu from "./Menu";

export default function NavHamburger() {
  useHamburgerScroll();
  useHamburgerObserver();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const bodyContainer = document.querySelector("body");
    const btnHamburger = document.querySelector(".js-hamburger");
    const menu = document.querySelector(".js-menu");
    const menuContent = document.querySelector(".js-menu__content");
    const burgerLines = document.querySelectorAll(".js-burger__container");

    if (!btnHamburger || !menuContent) {
      console.error("Something is wrong with btnHamburger or menuContent!");
      return;
    }

    function menuDisplay(act) {
      if (act === "add") {
        menu.classList.remove("hide");
        setTimeout(() => {
          bodyContainer.classList.add("o-noscroll");
          btnHamburger.classList.add("nav-active");
          menu.classList.add("c-menu--open");
          menuContent.classList.remove("hide");
          burgerLines.forEach((line) => {
            line.classList.add("c-burger__container--menu");
          });
        }, 0);
      } else if (act === "remove") {
        bodyContainer.classList.remove("o-noscroll");
        btnHamburger.classList.remove("nav-active");
        menu.classList.remove("c-menu--open");
        burgerLines.forEach((line) => {
          line.classList.remove("c-burger__container--menu");
        });
        setTimeout(() => {
          menu.classList.add("hide");
          menuContent.classList.add("hide");
        }, 500);
      }
    }

    if (isMenuOpen) {
      menuDisplay("add");
    } else {
      menuDisplay("remove");
    }

    function handleOutsideClick(event) {
      if (
        isMenuOpen &&
        !menuContent.contains(event.target) &&
        !btnHamburger.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  function handleHamburgerClick(e) {
    setIsMenuOpen((act) => !act);
  }

  return (
    <>
      <nav className="nav-hamburger">
        <button
          className="o-hamburger js-hamburger js-burger__toggler"
          onClick={handleHamburgerClick}>
          <span className="o-hamburger--line c-burger__container--lt js-burger__container"></span>
          <span className="o-hamburger--line c-burger__container--lt js-burger__container"></span>
          <span className="o-hamburger--line c-burger__container--lt js-burger__container"></span>
        </button>
      </nav>
      {/* Pass handleHamburgerClick as a prop to Menu */}
      <Menu handleHamburgerClick={handleHamburgerClick} />
    </>
  );
}
