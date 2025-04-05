import { useEffect } from "react";

export default function useLazyLoad() {
  useEffect(() => {
    const blurred = document.querySelectorAll(".js-img-blur");

    // Function to apply the `js-loaded` class
    function loaded(event) {
      const image = event.target;
      image.classList.add("js-loaded");
    }

    blurred.forEach((entry) => {
      const img = entry.querySelectorAll(".js-image");

      // Check if the first image is already loaded, then apply the `loaded` function
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

    // Cleanup function to remove event listeners
    return () => {
      blurred.forEach((entry) => {
        const img = entry.querySelectorAll(".js-image");
        img.forEach((image) => {
          image.removeEventListener("load", loaded);
        });
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount
}
