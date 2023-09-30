import WaveSurfer from "wavesurfer.js";
import w from "wavesurfer.js";
import "./style.css";
import a from "/Eminem - Not Afraid.mp3";

const vanillaPixels = 32;

const wavesurfer = w.create({
  container: "#player",
  waveColor: "#BF81FE",
  progressColor: "#8552F9",
  cursorColor: "#8D86FF",
  barGap: 8,
  barRadius: 6,
  fillParent: true,
  normalize: true,
  barWidth: 2,
  barRadius: 50,
  minPxPerSec: vanillaPixels,
  barHeight: 20,
  url: a,
  height: 112,
  cursorWidth: 3,
  hideScrollbar: true,
});

///ref : https://wavesurfer.xyz/examples/?soundcloud.js
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = Math.round(seconds) % 60;
  const paddedSeconds = `0${secondsRemainder}`.slice(-2);
  return `${minutes}:${paddedSeconds}`;
};

const controlButton = document.getElementById("control-button");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const loader = document.getElementById("loader");
const songTitle = document.getElementById("song-title");
const remainingTime = document.getElementById("remaning-time");
const currentTime = document.getElementById("current-time");

let validateSongTitle =
  songTitle.innerHTML.replace("/", "") &&
  songTitle.innerHTML.replace(".mp3", "");

songTitle.innerHTML = validateSongTitle;

wavesurfer.once("ready", () => {
  /// Fadeout the loader
  loader.style.opacity = 1;
  (function fade() {
    if ((loader.style.opacity -= 0.1) < 0) {
      loader.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
});

wavesurfer.on("decode", () => {
  currentTime.textContent = "0:00";
  remainingTime.textContent =
    "-" + formatTime(wavesurfer.getDuration() - wavesurfer.getCurrentTime());
});

wavesurfer.on("timeupdate", (cTime) => {
  currentTime.textContent = formatTime(cTime);
  remainingTime.textContent =
    "-" + formatTime(wavesurfer.getDuration() - cTime);
});

zoomInButton.addEventListener("click", () => {
  wavesurfer.zoom(vanillaPixels * 5);
});

zoomOutButton.addEventListener("click", () => {
  wavesurfer.zoom(vanillaPixels);
});

wavesurfer.on("zoom", (e) => {
  console.log("onZoom : " + e);
});

/// could be done cleaner
controlButton.addEventListener("click", () => {
  if (wavesurfer.isPlaying()) {
    controlButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="text-white w-16 h-16" viewBox="0 0 24 24"
    stroke-width="1" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round"
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>`;
    wavesurfer.pause();
  } else {
    controlButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="text-white w-16 h-16" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>
      `;
    wavesurfer.play();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  /// when we load the doc , there should be no way where the audio would be playing ?
  controlButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="text-white w-16 h-16" viewBox="0 0 24 24"
stroke-width="1" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round"
  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
</svg>`;
});
