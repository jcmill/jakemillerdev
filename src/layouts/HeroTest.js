// import useTextAnimation from "../hooks/useTextAnimation";
import Video from "../utils/video";
import video from "../images/logos/hero-logo.mp4";
// import lottie from "../scripts/lottie";

export default function Hero() {
  // lottie();
  // useTextAnimation();

  const handleClickAndScroll = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="js-hero c-hero o-grid js-bgc--dk" id="hero">
      <div className="c-hero__video">
        <Video src={video} />
      </div>
      <div className="c-hero__intro">
        <h1>I'm Built!</h1>
        <h4>
          Design is my language, code is my brush, and the web is my canvas.
        </h4>
        <button className="btn-primary" onClick={handleClickAndScroll}>
          Let's Talk
        </button>
      </div>
    </section>
  );
}
