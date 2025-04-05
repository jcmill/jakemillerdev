import { useEffect } from "react";

export default function useIconObserver() {
  useEffect(() => {
    const iconDark = document.querySelector(".js-icon--dk");
    const iconLight = document.querySelector(".js-icon--lt");
    const sections = document.querySelectorAll(".js-bgc--dk, .js-bgc--lt");
    const lastLightSection = document.querySelector(".js-bgc--lt:last-of-type"); // Select the last .js-bgc--lt

    const observerOptions = {
      root: null,
      rootMargin: "-32px 0px -95% 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("js-bgc--dk")) {
            iconDark.classList.add("js-logo-invisible");
            iconLight.classList.remove("js-logo-invisible");
          } else if (entry.target.classList.contains("js-bgc--lt")) {
            iconLight.classList.add("js-logo-invisible");
            iconDark.classList.remove("js-logo-invisible");
          }
        } else if (entry.target === lastLightSection) {
          // Handle when the last .js-bgc--lt exits the screen
          iconLight.classList.remove("js-logo-invisible");
          iconDark.classList.add("js-logo-invisible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);
}
