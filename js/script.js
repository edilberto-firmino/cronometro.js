const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function hideButton(button){
  button.style.display='none'
}

function showButton(button){
  button.style.display='block'
}

window.addEventListener('load', ()=>{
    showButton(startBtn)
    hideButton(pauseBtn)
    hideButton(resumeBtn)
    hideButton(resetBtn)
})


function startTimer() {
  hideButton(startBtn)
  showButton(pauseBtn)
  hideButton(resumeBtn)
  showButton(resetBtn)

  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.innerHTML = formatTime(minutes);
      secondsEl.innerHTML = formatTime(seconds);
      millisecondsEl.innerHTML = formatMilliseconds(milliseconds);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function pauseTimer() {

  isPaused = true;

  hideButton(startBtn)
  hideButton(pauseBtn)
  showButton(resumeBtn)
  showButton(resetBtn)

}

function resumeTimer() {
  isPaused = false;
  
  hideButton(startBtn)
  showButton(pauseBtn)
  hideButton(resumeBtn)
  showButton(resetBtn)

}

function resetTimer() {

  showButton(startBtn)
  hideButton(pauseBtn)
  hideButton(resumeBtn)
  hideButton(resetBtn)
  
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isPaused = false;
  minutesEl.innerHTML = "00";
  secondsEl.innerHTML = "00";
  millisecondsEl.innerHTML = "000";

}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${time}`.padStart(3, "0") : time;
}
