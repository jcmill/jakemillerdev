import { useEffect } from "react";

export default function useNavObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll(".js-bgc--dk, .js-bgc--lt");
    const navItem = document.querySelectorAll(".js-nav-item");

    const observerOptions = {
      root: null,
      rootMargin: "-32px 0px -95% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("js-bgc--dk")) {
            navItem.forEach((e) => {
              e.classList.add("nav-list__item--lt");
              e.classList.remove("nav-list__item--dk");
            });
          } else if (entry.target.classList.contains("js-bgc--lt")) {
            navItem.forEach((e) => {
              e.classList.remove("nav-list__item--lt");
              e.classList.add("nav-list__item--dk");
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
