import { useEffect } from "react";

export default function useIconObserver() {
  useEffect(() => {
    // const logoDark = document.querySelector(".js-logo--dk");
    // const logoLight = document.querySelector(".js-logo--lt");
    const iconDark = document.querySelector(".js-icon--dk");
    const iconLight = document.querySelector(".js-icon--lt");
    const sections = document.querySelectorAll(".js-bgc--dk, .js-bgc--lt");
    const lastLightSection = document.querySelector(".js-bgc--lt:last-of-type");

    const observerOptions = {
      root: null,
      rootMargin: "-32px 0px -95% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("js-bgc--dk")) {
            // logoDark.classList.add("js-logo-invisible");
            // logoLight.classList.remove("js-logo-invisible");
            iconDark.classList.add("js-logo-invisible");
            iconLight.classList.remove("js-logo-invisible");
          } else if (entry.target.classList.contains("js-bgc--lt")) {
            // logoLight.classList.add("js-logo-invisible");
            // logoDark.classList.remove("js-logo-invisible");
            iconLight.classList.add("js-logo-invisible");
            iconDark.classList.remove("js-logo-invisible");
          }
        } else if (entry.target === lastLightSection) {
          // logoLight.classList.remove("js-logo-invisible");
          // logoDark.classList.add("js-logo-invisible");
          iconLight.classList.remove("js-logo-invisible");
          iconDark.classList.add("js-logo-invisible");
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
