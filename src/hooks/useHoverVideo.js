import { useEffect } from "react";

export default function useHoverVideo() {
  useEffect(() => {
    const mouseCircle = document.querySelector("div.o-circle");
    const circleHover = document.querySelector(".js-circle");
    const imgHover = document.querySelectorAll(".js-hover-image");

    if (!mouseCircle || !circleHover || imgHover.length === 0) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;
    let speed = 0.06;

    let mouseFollow = function () {
      let distX = mouseX - circleX;
      let distY = mouseY - circleY;
      circleX = circleX + distX * speed;
      circleY = circleY + distY * speed;
      mouseCircle.style.left = circleX + 10 + "px";
      mouseCircle.style.top = circleY + 10 + "px";
      requestAnimationFrame(mouseFollow);
    };

    mouseFollow();

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    let imgHoverIndex;
    const handleMouseEnter = (entry, index) => {
      imgHoverIndex = index;
      circleHover.classList.remove("js-circle--invisible");
      imgHover[imgHoverIndex].classList.toggle("js-hide");
      imgHover[imgHoverIndex].play();
    };

    const handleMouseLeave = () => {
      circleHover.classList.add("js-circle--invisible");
      imgHover[imgHoverIndex].classList.toggle("js-hide");
      imgHover[imgHoverIndex].pause();
    };

    imgHover.forEach((entry, index) => {
      entry.addEventListener("mouseenter", () =>
        handleMouseEnter(entry, index)
      );
      entry.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      imgHover.forEach((entry) => {
        entry.removeEventListener("mouseenter", handleMouseEnter);
        entry.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
}
