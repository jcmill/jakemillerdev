import { useEffect, useRef } from "react";
import useWorkAnimations from "../hooks/useWorkAnimations";
import useHoverTextAnimation from "../hooks/useHoverTextAnimation.js";
import useHoverImage from "../hooks/useHoverImage";

export default function Project({ handleScaled, piece, index }) {
  useWorkAnimations();
  useHoverImage();
  useHoverTextAnimation();
  const imageStackRef = useRef(null);

  const getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  useEffect(() => {
    const imageStack = imageStackRef.current;
    const image = imageStack.querySelector(".js-image");
    const video = imageStack.querySelector(".js-project-vid");

    if (!imageStack || !image || !video) {
      console.error("Required elements not found in Project component.");
      return;
    }

    const handleMouseEnter = () => {
      image.classList.add("js-hide");
      video.classList.remove("js-hide");
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.warn("Video playback failed:", error);
          });
      }
    };

    const handleMouseLeave = () => {
      image.classList.remove("js-hide");
      video.classList.add("js-hide");
      video.pause();
    };

    imageStack.addEventListener("mouseenter", handleMouseEnter);
    imageStack.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageStack.removeEventListener("mouseenter", handleMouseEnter);
      imageStack.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  let phraseClass = index === 1 ? "o-color-block--even" : "";

  useEffect(() => {
    const setupPhrases = () => {
      const portfolioPhrases = [
        "Like any good story, some chapters flow effortlessly… and others involve a lot of coffee and debugging at 2 AM.",
        "Every great build starts with a simple idea… and a few ‘why isn’t this working?",
        "Every pixel, every challenge, every late-night aha! moment.",
        "Here’s a glimpse into the journey.",
        "Some projects feel like a walk in the park. Others…",
        "Like scaling a mountain with a laptop in one hand and coffee in the other.",
        "Some chapters involve battling the Kraken of cross-browser compatibility.",
      ];

      const targetElements = document.querySelectorAll(".o-color-block--even");

      const style = document.createElement("style");

      // next itteration will apply this to other elements.
      targetElements.forEach((el) => {
        const randomIndex = getRandomIndex(portfolioPhrases.length);
        const randomPhrase = portfolioPhrases[randomIndex];

        style.textContent += `
          .o-color-block--even::before {
            content: "${randomPhrase}";
          }
        `;
      });

      document.head.appendChild(style);

      return () => {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };

    const cleanupPhrases = setupPhrases();

    return () => {
      cleanupPhrases();
    };
  }, []);

  return (
    <div
      className={
        !handleScaled
          ? `c-portfolio__component js-portfolio__component ${phraseClass}`
          : `c-portfolio__component js-portfolio__component ${phraseClass} a-scaled`
      }>
      <a
        ref={imageStackRef}
        className="o-image--stack js-image--stack"
        href="motives-precisely-eyeliner.html">
        <img
          className="js-image js-hover-image"
          src={piece.image}
          alt=""
          loading="lazy"
        />
        <video
          className="js-image js-hover-image js-hide js-project-vid"
          src={piece.video}
          loading="lazy"
          autoPlay
          loop
          muted
          playsInline></video>
      </a>
      <div className="c-portfolio__component--text">
        <h5
          className="js-portfolio__title js-text-element"
          data-value={piece.brand}>
          {piece.brand}
        </h5>
        <p>{piece.role}</p>
      </div>
    </div>
  );
}
