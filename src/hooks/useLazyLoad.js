import { useEffect } from "react";

export default function useLazyLoad() {
  useEffect(() => {
    const blurred = document.querySelectorAll(".js-img-blur");

    function loaded(event) {
      const image = event.target;
      image.classList.add("js-loaded");
    }

    blurred.forEach((entry) => {
      const img = entry.querySelectorAll(".js-image");

      if (img.length > 0 && img[0].complete) {
        img.forEach((image) => {
          image.classList.add("js-loaded");
        });
      } else {
        img.forEach((image) => {
          image.addEventListener("load", loaded);
        });
      }
    });

    return () => {
      blurred.forEach((entry) => {
        const img = entry.querySelectorAll(".js-image");
        img.forEach((image) => {
          image.removeEventListener("load", loaded);
        });
      });
    };
  }, []);
}
