import { useEffect } from "react";

export default function useHamburgerScroll() {
  useEffect(() => {
    const ulNav = document.querySelector(".js-hamburger");
    let scrollOld = 0;

    function scrollDirection() {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        ulNav.classList.remove("js-icon-rise");
      } else if (scrollOld < currentScrollY) {
        ulNav.classList.add("js-icon-rise");
      } else {
        ulNav.classList.remove("js-icon-rise");
      }

      scrollOld = currentScrollY;
    }

    window.addEventListener("scroll", scrollDirection);

    return () => {
      window.removeEventListener("scroll", scrollDirection);
    };
  }, []);
}
