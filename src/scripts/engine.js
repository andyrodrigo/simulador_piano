const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mappedKeys = [];

let audio = new Audio("src/tunes/a.wav");
audio.volume = 0.5;

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianokeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mappedKeys.includes(e.key)) playTune(e.key);
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
  console.log(e.target.value);
};

const showHideKeys = (e) => {
  pianokeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
