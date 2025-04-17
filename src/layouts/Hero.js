import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import useTextAnimation from "../hooks/useTextAnimation";
import Video from "../utils/video";
import video from "../images/logos/hero-logo.mp4";
import heroImage from "../images/logos/logo-mobile-hero.png";

export default function Hero() {
  useTextAnimation();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="js-hero c-hero o-grid js-bgc--dk">
      <div className="c-hero__video">
        {!isSmallScreen ? (
          <Video src={video} />
        ) : (
          <img src={heroImage} alt="Jake's glass logo mark" />
        )}
      </div>
      <div className="c-hero__intro">
        <h1>I'm Built</h1>
        <h1>
          to <span className="js-hero-element">create</span>.
        </h1>
        <h1>
          I <span className="js-hero-element">create</span>
        </h1>
        <h1>to Build.</h1>
        <h4>
          Design is my language, code is my brush, and the web is my canvas.
        </h4>
        <Link to="/contact">
          <button className="btn-primary">Let's Talk</button>
        </Link>
      </div>
    </section>
  );
}
