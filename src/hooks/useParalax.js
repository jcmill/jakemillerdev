import { useEffect } from "react";

export default function useParalax() {
  useEffect(() => {
    const parallaxOptions = {
      rootMargin: "0px 0px",
      threshold: 0.25,
    };

    const parallaxAbout = document.querySelectorAll(".js-parallax-about");

    const parallaxCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          if (entry.target.classList.contains("js-parallax-about")) {
            window.removeEventListener("scroll", parallaxAboutSpeed, false);
          }
          return;
        }
        if (
          entry.isIntersecting &&
          entry.target.classList.contains("js-parallax-about")
        ) {
          window.addEventListener("scroll", parallaxAboutSpeed, false);
        }
      });
    };

    const observerParallax = new IntersectionObserver(
      parallaxCallback,
      parallaxOptions
    );

    const handleLoad = () => {
      const query = window.matchMedia("(min-width: 767px)");
      if (query.matches) {
        parallaxAbout.forEach((target) => {
          observerParallax.observe(target);
        });
      }
    };

    window.addEventListener("load", handleLoad);

    function parallaxAboutSpeed() {
      const speed = window.scrollY * 0.02;
      parallaxAbout.forEach((entry) => {
        entry.style.translate = `0 ${speed}px`;
      });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", parallaxAboutSpeed);
      observerParallax.disconnect();
    };
  }, []);
}
