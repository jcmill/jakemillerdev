import { useEffect } from "react";

export default function useTextAnimation() {
  useEffect(() => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const words = ["create", "envision", "design", "imagine", "invent"];
    const heroElements = document.querySelectorAll(".js-hero-element");

    primeAnimate(heroElements, words, 6000);

    function primeAnimate(elements, words = null, time = 5000) {
      elements.forEach((element) => {
        let currentWordIndex = 0;
        let logoAnimationIteration = 0;
        let animationInterval = null;

        function animateWord(word) {
          logoAnimationIteration = 0;
          clearInterval(animationInterval);

          animationInterval = setInterval(() => {
            element.innerText = word
              .split("")
              .map((letter, index) => {
                if (index < logoAnimationIteration) {
                  return word[index];
                }
                return characters[Math.floor(Math.random() * 36)];
              })
              .join("");

            if (logoAnimationIteration > word.length) {
              clearInterval(animationInterval);
              if (words) {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                setTimeout(() => animateWord(words[currentWordIndex]), time);
              }
            }

            logoAnimationIteration += word.length * 0.022;
          }, 15);
        }

        if (words) {
          animateWord(words[currentWordIndex]);
        }
      });
    }
  }, []);
}
