import w from "wavesurfer.js";
import "./normalize.css";
import "./style.css";
import a from "/Eminem - Not Afraid.mp3";

const vanillaPixels = 32;

const wavesurfer = w.create({
  container: ".wavesurfer-container",
  waveColor: "#A0A0A0",
  progressColor: "#E9094F",
  cursorColor: "black",
  barGap: 4,
  barRadius: 6,
  fillParent: true,
  normalize: true,
  barWidth: 2,
  barRadius: 50,
  minPxPerSec: vanillaPixels,
  barHeight: 20,
  url: a,
  height: 50,
  cursorWidth: 1,
  hideScrollbar: true,
});

///ref : https://wavesurfer.xyz/examples/?soundcloud.js
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = Math.round(seconds) % 60;
  const paddedSeconds = `0${secondsRemainder}`.slice(-2);
  return `${minutes}:${paddedSeconds}`;
}

const buttonWrapper = document.getElementById("play-pause-button");
const playbackDuration = document.getElementById("playback-duration");
const backwardButton = document.getElementById("backward-button");
const forwardButton = document.getElementById("forward-button");
const zoomInButton = document.getElementById("zoom-in-button");
const zoomOutButton = document.getElementById("zoom-out-button");

wavesurfer.on("timeupdate", () => {
  playbackDuration.textContent = formatTime(wavesurfer.getCurrentTime());
});

zoomInButton.addEventListener("click", () => {
  wavesurfer.zoom(wavesurfer.options.minPxPerSec * 5);
});

zoomOutButton.addEventListener("click", () => {
  wavesurfer.zoom(vanillaPixels);
});

backwardButton.addEventListener("click", () => {
  wavesurfer.skip(-5);
});

forwardButton.addEventListener("click", () => {
  wavesurfer.skip(5);
});

buttonWrapper.addEventListener("click", () => {
  buttonWrapper.classList.toggle("active");
  if (wavesurfer.isPlaying()) wavesurfer.pause();
  else wavesurfer.play();
});
