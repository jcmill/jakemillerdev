// const nav = document.querySelector("nav");
var ulNav = document.querySelector(".js-nav");
var navItem = document.querySelectorAll(".js-nav-item");
var mouseCircle = document.querySelector("div.o-circle");
// var bgDark = document.querySelectorAll(".js-bgc--dk");
var bgLight = document.querySelectorAll(".js-bgc--lt");
// var logoDark = document.querySelector(".js-logo--dk");
// var logoLight = document.querySelector(".js-logo--lt");
var iconDark = document.querySelector(".js-icon--dk");
var iconLight = document.querySelector(".js-icon--lt");
var circleHover = document.querySelector(".js-circle");
var imgHover = document.querySelectorAll(".js-hover-image");
var logoRise = document.querySelector(".js-logo");
var iconActions = document.querySelector(".js-icon");

/// logo dark/light
// observer options to tigger change at correct point on section
var lightbgObserverOptions = {
  rootMargin: "-32px 0px -95% 0px",
};

// observer funtion to add and remove classes associated with logo/icon color change
var lightbgObserver = new IntersectionObserver(function (
  entries,
  lightbgObserver
) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      iconDark.classList.add("js-logo-invisible");
      iconLight.classList.remove("js-logo-invisible");
      navItem.forEach(function (e) {
        e.classList.add("nav-list__item--lt");
        e.classList.remove("nav-list__item--dk");
      });
      // return;
    } else {
      iconDark.classList.remove("js-logo-invisible");
      iconLight.classList.add("js-logo-invisible");
      navItem.forEach(function (e) {
        e.classList.remove("nav-list__item--lt");
        e.classList.add("nav-list__item--dk");
      });
    }
  });
},
lightbgObserverOptions); // callback to observer margin options

// initiate observer funtion for all sections with a light background
bgLight.forEach(function (target) {
  lightbgObserver.observe(target);
});

//// hover circle mouse follow vars
var mouseX = 0;
var mouseY = 0;
var circleX = 0;
var circleY = 0;
var speed = 0.06;

// mouse follow funtion
var _mouseFollow = function mouseFollow() {
  // assignes value to var using initiated values above
  var distX = mouseX - circleX;
  var distY = mouseY - circleY;
  // calcs seperate horizontal and vertical values, paring them with a speed value for a fluid motion
  circleX = circleX + distX * speed;
  circleY = circleY + distY * speed;
  // applies elements horizontal and vertical positioning using above calcs
  mouseCircle.style.left = circleX + 10 + "px";
  mouseCircle.style.top = circleY + 10 + "px";
  // window method requests browser call callback funtion before next action
  requestAnimationFrame(_mouseFollow);
};

// initiates above function for mouse follow
_mouseFollow();

// tracks and translates mouse moments to be used in the mouseFollow funtion above
document.addEventListener("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// image hover that shows secondary image and utilizes mouse follow element
var imgHoverIndex;
imgHover.forEach(function (entry, index) {
  entry.addEventListener("mouseenter", function (e) {
    imgHoverIndex = index;
    circleHover.classList.remove("js-circle--invisible");
    imgHover[imgHoverIndex].classList.toggle("js-hide");
    imgHover[imgHoverIndex].play();
    circleHover.addEventListener("mouseenter", function (e) {
      circleHover.classList.remove("js-circle--invisible");
      imgHover[imgHoverIndex].classList.remove("js-hide");
    });
  });
  entry.addEventListener("mouseleave", function (e) {
    circleHover.classList.add("js-circle--invisible");
    imgHover[imgHoverIndex].classList.toggle("js-hide");
  });
  circleHover.addEventListener("mouseleave", function (e) {
    circleHover.classList.add("js-circle--invisible");
    imgHover[imgHoverIndex].classList.add("js-hide");
  });
});

///////
//// scroll direction
// Define scrollOld as a global variable
let scrollOld = 0;

function scrollDirection() {
  const currentScrollY = window.scrollY;

  if (currentScrollY === 0) {
    logoRise.classList.remove("js-logo-rise");
    iconActions.classList.add("js-icon-rise");
    ulNav.classList.remove("js-icon-rise");
  } else if (scrollOld < currentScrollY) {
    // Scrolling down
    logoRise.classList.add("js-logo-rise");
    iconActions.classList.remove("js-icon-rise");
    ulNav.classList.add("js-icon-rise");
  } else {
    // Scrolling up
    iconActions.classList.add("js-icon-rise");
    ulNav.classList.remove("js-icon-rise");
  }

  scrollOld = currentScrollY;
}

///////
//// mediaQ logo and nav scroll animation
var videoTags = document.querySelectorAll(".js-project-vid");
function mediaQ() {
  var query = window.matchMedia("(min-width: 767px)");
  if (!query.matches) {
    // Re-add the autoplay attribute on all videos when on mobile and tablet
    videoTags.forEach(function (video) {
      video.setAttribute("autoplay", "");
    });
    window.onscroll = function () {
      scrollDirection();
    };
  }
  if (query.matches === true) {
    // Remove the autoplay attribute on all videos when on desktop
    videoTags.forEach(function (video) {
      video.removeAttribute("autoplay", "");
    });
    window.onscroll = function () {
      scrollDirection();
    };
  }
}
window.addEventListener("DOMContentLoaded", mediaQ);
window.addEventListener("resize", mediaQ);
