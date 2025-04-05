import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Canvas() {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const frameCount = 180;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = "#3B3B3B";

    const currentFrame = (index) =>
      `../images/pages/scroll/${(index + 1).toString()}.jpg`;

    const images = [];
    let frames = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(frames, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        scrub: 2,
        end: "100%",
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      context.canvas.width = images[0].width;
      context.canvas.height = images[0].height;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[frames.frame], 0, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="c-canvas js-bgc--dk">
      <canvas />
    </section>
  );
}
