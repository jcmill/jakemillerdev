import { useEffect } from "react";

export default function useHamburgerObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll(".js-bgc--dk, .js-bgc--lt");
    const burgerLines = document.querySelectorAll(".js-burger__container");
    const logoDark = document.querySelector(".js-logo--dk");
    const logoLight = document.querySelector(".js-logo--lt");

    const observerOptions = {
      root: null,
      rootMargin: "-32px 0px -95% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("js-bgc--dk")) {
            logoLight.classList.remove("js-logo-invisible");
            logoDark.classList.add("js-logo-invisible");
            burgerLines.forEach((e) => {
              e.classList.add("c-burger__container--lt");
              e.classList.remove("c-burger__container--dk");
            });
          } else if (entry.target.classList.contains("js-bgc--lt")) {
            logoLight.classList.add("js-logo-invisible");
            logoDark.classList.remove("js-logo-invisible");
            burgerLines.forEach((e) => {
              e.classList.remove("c-burger__container--lt");
              e.classList.add("c-burger__container--dk");
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
}
