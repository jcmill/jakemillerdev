import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import useWorkAnimations from "../hooks/useWorkAnimations.js";
import useHoverTextAnimation from "../hooks/useHoverTextAnimation.js";
import useHoverImage from "../hooks/useHoverImage.js";

export default function HomeProject({
  handleScaled,
  piece,
  index,
  type,
  handleProjectId,
  handleFilterState,
}) {
  useWorkAnimations();
  useHoverImage();
  useHoverTextAnimation();
  const imageStackRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const getRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
  };

  useEffect(() => {
    const imageStack = imageStackRef.current;
    const image = imageStack.querySelector(".js-image");
    const video = imageStack.querySelector(".js-project-vid");

    !isSmallScreen && video.pause();

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
      !isSmallScreen && video.pause();
    };

    imageStack.addEventListener("mouseenter", handleMouseEnter);
    imageStack.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageStack.removeEventListener("mouseenter", handleMouseEnter);
      imageStack.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isSmallScreen]);

  let phraseClass = index === 1 ? "o-color-block--even" : "";

  useEffect(() => {
    const setupPhrases = () => {
      const portfolioPhrases = [
        "Like any good story, some chapters flow effortlessly… and others involve a lot of coffee and debugging at 2 AM.",
        "Every great build starts with a simple idea… and a few 'why isn’t this working?'",
        "Every pixel, every challenge, every late-night 'aha!' moment.",
        "Here’s a glimpse into the journey.",
        "Some projects feel like a walk in the park. Others…",
        "Like scaling a mountain with a laptop in one hand and coffee in the other.",
        "Some chapters involve battling the Kraken of cross-browser compatibility.",
      ];

      const targetElements = document.querySelectorAll(".o-color-block--even");

      const style = document.createElement("style");

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

  function handleProjectClick(piece) {
    handleFilterState(type);
    handleProjectId(piece);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div
      onClick={() => handleProjectClick(piece)}
      className={
        !handleScaled
          ? `c-portfolio__component js-portfolio__component ${phraseClass}`
          : `c-portfolio__component js-portfolio__component ${phraseClass} a-scaled`
      }>
      <Link to={piece.urlRoute} data-type={type} onClick={handleFilterState}>
        <div ref={imageStackRef} className="o-image--stack js-image--stack">
          {!isSmallScreen && (
            <video
              className="js-hover-image js-project-vid"
              src={piece.video}
              data-type={type}
              loading="lazy"
              loop
              muted
              playsInline
            />
          )}
          <img
            className="js-image js-hover-image"
            src={piece.homeImage}
            alt=""
            loading="lazy"
            data-type={type}
          />
        </div>
        <div className="c-portfolio__component--text">
          <h5
            className="js-portfolio__title js-text-element"
            data-value={piece.title}
            datatype={type}>
            {piece.brand}
          </h5>
          <p>{piece.role}</p>
        </div>
      </Link>
    </div>
  );
}
