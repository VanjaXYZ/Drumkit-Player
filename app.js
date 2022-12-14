function playBeat(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.currentTime = 0;
  audio.play();
  key.classList.add("play");
}

function removeStyle(e) {
  if (e.propertyName !== "transform") {
    this.classList.remove("play");
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeStyle);
});

window.addEventListener("keydown", playBeat);
