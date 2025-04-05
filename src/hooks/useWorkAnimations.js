import { useEffect } from "react";

export default function useWorkAnimations() {
  useEffect(() => {
    const portfolioComponent = document.querySelectorAll(
      ".js-portfolio__component"
    );

    const setupScalingAnimations = () => {
      const scaleOptions = {
        rootMargin: "0px 0px 100px 0px",
        threshold: 0,
      };

      const scaleImage = (target, index) => {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visiblePercentage = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );

        const scaleValue = Math.min(visiblePercentage * 1.5, 1);

        if (scaleValue === 1 && target.style.transform === `scale(1)`) {
          if (!target.dataset.triggered) {
            target.dataset.triggered = "true";
            target.classList.add("a-scaled");
          }
        } else {
          target.style.transform = `scale(${scaleValue})`;
        }
      };

      const scaleComponentCallback = (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(portfolioComponent).indexOf(entry.target);

          if (entry.isIntersecting) {
            const scrollHandler = () => scaleImage(entry.target, index);
            window.addEventListener("scroll", scrollHandler);

            entry.target.cleanupScrollHandler = () =>
              window.removeEventListener("scroll", scrollHandler);
          } else {
            entry.target.cleanupScrollHandler?.();
          }
        });
      };

      const scaleComponentObserver = new IntersectionObserver(
        scaleComponentCallback,
        scaleOptions
      );

      portfolioComponent.forEach((target) => {
        scaleComponentObserver.observe(target);
      });

      return () => {
        portfolioComponent.forEach((target) => {
          target.cleanupScrollHandler?.();
        });
        scaleComponentObserver.disconnect();
      };
    };

    const cleanupScaling = setupScalingAnimations();

    return () => {
      cleanupScaling();
    };
  }, []);
}
