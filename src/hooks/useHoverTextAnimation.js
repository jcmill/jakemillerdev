import { useEffect } from "react";

export default function useHoverTextAnimation() {
  useEffect(() => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textElements = document.querySelectorAll(".js-text-element");

    primeAnimate(textElements);

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

        if (element.dataset.value) {
          element.addEventListener("mouseover", () => {
            clearInterval(animationInterval);
            animateWord(element.dataset.value);
          });

          element.addEventListener("mouseout", () => {
            clearInterval(animationInterval);
            element.innerText = element.dataset.value;
            if (words) {
              setTimeout(() => animateWord(words[currentWordIndex]), time);
            }
          });
        }
      });
    }
  }, []);
}
