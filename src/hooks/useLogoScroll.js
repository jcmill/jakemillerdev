import { useEffect } from "react";

export default function useLogoScroll() {
  useEffect(() => {
    const logoRise = document.querySelector(".js-logo");
    const iconActions = document.querySelector(".js-icon");
    let scrollOld = 0;

    function scrollDirection() {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        logoRise.classList.remove("js-logo-rise");
        iconActions.classList.add("js-icon-rise");
      } else if (scrollOld < currentScrollY) {
        logoRise.classList.add("js-logo-rise");
        iconActions.classList.remove("js-icon-rise");
      } else {
        iconActions.classList.add("js-icon-rise");
      }

      scrollOld = currentScrollY;
    }

    window.addEventListener("scroll", scrollDirection);

    return () => {
      window.removeEventListener("scroll", scrollDirection);
    };
  }, []);
}
