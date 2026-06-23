class Progress {
  constructor(element) {
    this.root = element;
  }

  setValue(value) {
    const percent = Math.max(0, Math.min(100, Number(value)));
    this.root.style.setProperty('--value', `${percent}%`);
  }

  setAnimated(isAnimated) {
    if (isAnimated) {
      this.root.classList.add('progress--animated');
    } else {
      this.root.classList.remove('progress--animated');
    }
  }

  setHidden(isHidden) {
    if (isHidden) {
      this.root.classList.add('progress--hidden');
    } else {
      this.root.classList.remove('progress--hidden');
    }
  }
}

const progressElement = document.querySelector('.progress');
const progress = new Progress(progressElement);

const valueInput = document.querySelector('.control__input[type="number"]');
const toggles = document.querySelectorAll('.control__checkbox');
const animateToggle = toggles[0];
const hideToggle = toggles[1];

valueInput.addEventListener('input', (event) => {
  let value = parseInt(event.target.value, 10);
  if (isNaN(value)) {
    value = 0;
  }
  progress.setValue(value);
});

animateToggle.addEventListener('change', (event) => {
  progress.setAnimated(event.target.checked);
});

hideToggle.addEventListener('change', (event) => {
  progress.setHidden(event.target.checked);
});