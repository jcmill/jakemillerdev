import { HashLink as Link } from "react-router-hash-link";
import useTextAnimation from "../hooks/useTextAnimation";
import Video from "../utils/video";
import video from "../images/logos/hero-logo.mp4";

export default function Hero() {
  useTextAnimation();

  return (
    <section className="js-hero c-hero o-grid js-bgc--dk">
      <div className="c-hero__video">
        <Video src={video} />
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
