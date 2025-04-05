import { useEffect } from "react";

export default function useParalax() {
  useEffect(() => {
    const parallaxOptions = {
      rootMargin: "0px 0px",
      threshold: 0.25,
    };

    const parallaxAbout = document.querySelectorAll(".js-parallax-about");

    // Observer callback to manage scroll event listeners
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

    // Add observer for elements matching the media query
    const handleLoad = () => {
      const query = window.matchMedia("(min-width: 767px)");
      if (query.matches) {
        parallaxAbout.forEach((target) => {
          observerParallax.observe(target);
        });
      }
    };

    window.addEventListener("load", handleLoad);

    // Parallax speed function
    function parallaxAboutSpeed() {
      const speed = window.scrollY * 0.02;
      parallaxAbout.forEach((entry) => {
        entry.style.translate = `0 ${speed}px`;
      });
    }

    // Cleanup function
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", parallaxAboutSpeed);
      observerParallax.disconnect();
    };
  }, []); // Empty dependency array ensures this runs once on mount
}
