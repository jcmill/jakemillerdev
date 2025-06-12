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

    const firstImage = new Image();
    firstImage.src = currentFrame(0);
    images[0] = firstImage;

    function loadImage(index) {
      if (!images[index]) {
        const img = new Image();
        img.src = currentFrame(index);
        images[index] = img;
      }
    }

    gsap.to(frames, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        start: "0%",
        trigger: canvas,
        scrub: 2,
        end: "110%",
      },
      onUpdate: () => {
        render();
        loadImage(frames.frame + 1);
        loadImage(frames.frame - 1);
      },
    });

    firstImage.onload = render;

    function render() {
      const image = images[frames.frame];
      if (image && image.complete) {
        context.canvas.width = image.width;
        context.canvas.height = image.height;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);
      }
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
