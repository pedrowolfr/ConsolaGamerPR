const btnON = document.querySelector(".btn-on");
const btnOFF = document.querySelector(".btn-off");
const imageOn = document.getElementById("imageOn");
const imageContainer = document.getElementById("imageContainer");
const imageList = [
  "/img/juego1.gif",
  "/img/juego2.gif",
  "/img/juego3.gif",
  "/img/juego4.gif",
];

let currentImageIndex = 0;
let consoleOn = false;

function changeImage() {
  if (currentImageIndex >= imageList.length) {
    currentImageIndex = 0;
  }
  imageContainer.src = imageList[currentImageIndex];
  currentImageIndex++;
}

function hideImage() {
  imageContainer.style.display = "none";
}

btnON.onclick = function () {
  imageOn.style.display = "block";
  consoleOn = true;
};

document.querySelector(".btn-a").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};
document.querySelector(".btn-b").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};
document.querySelector(".btn-up").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};
document.querySelector(".btn-down").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};
document.querySelector(".btn-right").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};
document.querySelector(".btn-left").onclick = function () {
  if (consoleOn) {
    changeImage();
    imageContainer.style.display = "block";
  }
};

btnOFF.onclick = function () {
  imageOn.style.display = "none";
  hideImage();
  consoleOn = false;
};
