class Progress {
  constructor(element) {
    this.root = element;
  }

  setValue(value) {
    const percent = Math.max(0, Math.min(100, Number(value) || 0));
    this.root.style.setProperty("--value", `${percent}%`);
  }

  setAnimated(isAnimated) {
    this.root.classList.toggle("progress--animated", isAnimated);
  }

  setHidden(isHidden) {
    this.root.classList.toggle("progress--hidden", isHidden);
  }
}

const progress = new Progress(document.querySelector(".progress"));
const valueInput = document.querySelector("#value-input");
const animateToggle = document.querySelector("#animate-toggle");
const hideToggle = document.querySelector("#hide-toggle");

valueInput.addEventListener("input", (event) => {
  progress.setValue(Number(event.target.value) || 0);
});

animateToggle.addEventListener("change", (event) => {
  progress.setAnimated(event.target.checked);
});

hideToggle.addEventListener("change", (event) => {
  progress.setHidden(event.target.checked);
});