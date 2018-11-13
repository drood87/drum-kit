const keys = document.querySelectorAll(".key");

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from executing
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
    console.log(e);
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if not a transform
    this.classList.remove("playing");
}

function playOnMouseClick() {
    const getKeyNumber = this.getAttribute("data-key");
    const key = document.querySelector(`.key[data-key="${getKeyNumber}"]`);
    const audio = document.querySelector(`audio[data-key="${getKeyNumber}"]`);
    if (!audio) return; // stop the function from executing
    audio.currentTime = 0; // rewind to the start
    console.log(getKeyNumber);
    audio.play();
    key.classList.add("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("click", playOnMouseClick));
