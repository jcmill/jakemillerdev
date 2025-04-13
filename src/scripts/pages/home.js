var portfolioComponent = document.querySelectorAll(".js-portfolio__component");
var portfolioComponentTitle = document.querySelectorAll(".js-portfolio__title");
var canvas = document.querySelector("canvas");

//////
//// portfolio scale observer
var scaleOptions = {
  rootMargin: "0px 0px 100px 0px",
  threshold: 0,
};
var scaleComponentCallback = function scaleComponentCallback(
  entries,
  observer
) {
  entries.forEach(function (entry) {
    var index = Array.from(portfolioComponent).indexOf(entry.target);
    if (entry.isIntersecting) {
      window.addEventListener("scroll", function () {
        return scaleImage(entry.target, index);
      });
    } else {
      window.removeEventListener("scroll", function () {
        return scaleImage(entry.target);
      });
    }
  });
};
var scaleComponentObserver = new IntersectionObserver(
  scaleComponentCallback,
  scaleOptions
);
portfolioComponent.forEach(function (target) {
  scaleComponentObserver.observe(target);
});
var portfolioPhrases = [
  "Like any good story, some chapters flow effortlessly… and others involve a lot of coffee and debugging at 2 AM.",
  "Every great build starts with a simple idea… and a few ‘why isn’t this working?",
  "Every pixel, every challenge, every late-night aha! moment.",
  "here’s a glimpse into the journey.",
  "Some projects feel like a walk in the park. Others…",
  "Like scaling a mountain with a laptop in one hand and coffee in the other.",
  "Some chapters involve battling the Kraken of cross-browser compatibility.",
];
var targetElements = document.querySelectorAll(
  ".c-portfolio__component:nth-of-type(4n + 3)"
);
var style = document.createElement("style");
targetElements.forEach(function (el, i) {
  var uniqueClass = "portfolio-phrase-".concat(i);
  el.classList.add(uniqueClass);
  style.textContent += "\n    ."
    .concat(uniqueClass, '::before {\n      content: "')
    .concat(portfolioPhrases[i], '";\n    }\n  ');
});
document.head.appendChild(style);
function componentTitle(target, index) {
  var child = target.children[1];
  setTimeout(function () {
    child.classList.remove("invisable");
    secondaryAnimate(child);
  }, 250);
}
function scaleImage(target, index) {
  var rect = target.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var boxOne = [1, 5, 9, 13];
  var boxTwo = [2, 6, 10, 14];
  var visiblePercentage = Math.min(
    Math.max((windowHeight - rect.top) / windowHeight, 0),
    1
  );
  var scaleValue = Math.min(visiblePercentage * 1.5, 1);

  // Check if the action for this index has already been triggered
  if (scaleValue === 1 && target.style.transform === "scale(1)") {
    if (!target.dataset.triggered) {
      target.dataset.triggered = "true"; // Mark the target as triggered
      target.classList.add("a-scaled");
      componentTitle(target);
      if (boxOne.includes(index)) {
        target.classList.add("o-color-block--even");
      }
      if (boxTwo.includes(index)) {
        target.classList.add("o-color-block--odd");
      }
    }
  } else {
    target.style.transform = "scale(".concat(scaleValue, ")");
  }
}

//////
//// canvas
var context = canvas.getContext("2d");
var frameCount = 180;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "#3B3B3B";
var currentFrame = function currentFrame(index) {
  return "public/images/pages/scroll/".concat((index + 1).toString(), ".jpg");
};
var images = [];
var frames = {
  frame: 0,
};
for (var i = 0; i < frameCount; i++) {
  var img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
gsap.to(frames, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    // anticipatePin: 1,
    trigger: canvas,
    scrub: 2,
    // pin: "canvas",
    end: "100%",
    // markers: true,
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
