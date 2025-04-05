var parallaxAbout = document.querySelectorAll(".js-parallax-about");

//////
//// parallax
// parallaxing elements - starting and stopping individually
// observer options
var parallaxOptions = {
  rootMargin: "0px 0px",
  threshold: 0.25
};

// observer callback information - turns eventListener on and off - negates initial load trigger
var parallaxCallback = function parallaxCallback(entries, observer) {
  entries.forEach(function (entry) {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      if (entry.target.classList.contains("js-parallax-about")) {
        window.removeEventListener("scroll", parallaxAboutSpeed, false);
      }
      return;
    }
    if (entry.isIntersecting && entry.target.classList.contains("js-parallax-about")) {
      window.addEventListener("scroll", parallaxAboutSpeed, false);
    }
  });
};
var observerParallax = new IntersectionObserver(parallaxCallback, parallaxOptions);
window.addEventListener("load", function () {
  var query = window.matchMedia("(min-width: 767px)");
  if (query.matches === true) {
    parallaxAbout.forEach(function (target) {
      observerParallax.observe(target);
    });
  }
});
function parallaxAboutSpeed() {
  var speed = window.scrollY * 0.01;
  parallaxAbout.forEach(function (entry) {
    entry.style.translate = "0 ".concat(speed, "px");
  });
}