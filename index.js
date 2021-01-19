var images = Array.from(document.querySelectorAll(".demo__image-container"));
var control = document.querySelector(".demo__control");

var current = 0;

function next() {
  control.setAttribute("disabled", "");
  var isLast = current === images.length - 1;
  current = isLast ? 0 : current + 1;
  var previous = isLast ? images.length - 1 : current - 1;

  var previousImage = images[previous];
  var currentImage = images[current];

  previousImage.classList.add("demo__image-container--animate-out");
  currentImage.classList.add("demo__image-container--animate-in");

  setTimeout(function () {
    currentImage.classList.add("demo__image-container--current");
    previousImage.classList.remove("demo__image-container--current");
    previousImage.classList.remove("demo__image-container--animate-out");
    currentImage.classList.remove("demo__image-container--animate-in");
    control.removeAttribute("disabled");
  }, 1000);
}

function rightPressed(e) {
  var event = e || window.event;
  if (event.keyCode == "39" && !control.hasAttribute("disabled")) {
    next();
  }
}

control.addEventListener("click", next);
document.addEventListener("keydown", rightPressed);
