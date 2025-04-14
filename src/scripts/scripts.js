// global
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var words = ["create", "envision", "design", "imagine", "invent"];
var blurred = document.querySelectorAll(".js-img-blur");
var heroElements = document.querySelectorAll(".js-hero-element");
var textElements = document.querySelectorAll(".js-text-element");

//////
//// lazy load
// multi use lazy load blurred image
// sets all targeted elements to var
blurred.forEach(function (entry) {
  var img = entry.querySelectorAll(".js-image");

  // funtion to apply js-loaded class
  function loaded() {
    img.forEach(function (image) {
      image.classList.add("js-loaded");
    });
  }
  // initiates the first image then moves onto each element after, applying loaded class as it progress through the array.
  if (img.length > 0 && img[0].complete) {
    loaded();
  } else {
    img.forEach(function (image) {
      image.addEventListener("load", loaded);
    });
  }
});
primeAnimate(heroElements, words, 6000);
primeAnimate(textElements);
function primeAnimate(elements) {
  var words =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var time =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
  elements.forEach(function (element) {
    var currentWordIndex = 0;
    var logoAnimationIteration = 0;
    var animationInterval = null;
    function animateWord(word) {
      logoAnimationIteration = 0;
      clearInterval(animationInterval);
      animationInterval = setInterval(function () {
        element.innerText = word
          .split("")
          .map(function (letter, index) {
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
            setTimeout(function () {
              return animateWord(words[currentWordIndex]);
            }, time);
          }
        }
        logoAnimationIteration += word.length * 0.022;
      }, 15);
    }
    if (words) {
      animateWord(words[currentWordIndex]);
    }
    if (element.dataset.value) {
      element.addEventListener("mouseover", function () {
        clearInterval(animationInterval);
        animateWord(element.dataset.value);
      });
      element.addEventListener("mouseout", function () {
        clearInterval(animationInterval);
        element.innerText = element.dataset.value;
        if (words) {
          setTimeout(function () {
            return animateWord(words[currentWordIndex]);
          }, time);
        }
      });
    }
  });
}
function secondaryAnimate(element) {
  if (element.dataset.animated === "true") {
    return;
  }
  element.dataset.animated = "true";
  var logoAnimationIteration = 0;
  var animationInterval = null;
  clearInterval(animationInterval);
  setTimeout(function () {
    animationInterval = setInterval(function () {
      element.innerText = element.dataset.value
        .split("")
        .map(function (letter, index) {
          if (index < logoAnimationIteration) {
            return element.dataset.value[index];
          }
          return characters[Math.floor(Math.random() * 36)];
        })
        .join("");
      if (logoAnimationIteration > element.dataset.value.length) {
        clearInterval(animationInterval);
      }
      logoAnimationIteration += element.dataset.value.length * 0.022;
    }, 15);
  });
}
