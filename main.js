const currentDate = document.getElementById("date");

let newDate = new Date();
let date = [newDate.getFullYear(), newDate.getDay(), newDate.getDate()];

currentDate.textContent = `${date[0]}년 ${date[1]}월 ${date[2]}일`;

const timerDay = document.getElementById("day");
const timerHour = document.getElementById("hour");
const timerMin = document.getElementById("min");
const timerSec = document.getElementById("sec");

let timeId;
let day = 0;
let hour = 0;
let min = 0;
let sec = 0;
timerDay.textContent = "00일";
timerHour.textContent = "00시간";
timerMin.textContent = "00분";
timerSec.textContent = "00초";
function timerStart() {
  sec++;
  timerSec.textContent = sec > 9 ? sec + "초" : "0" + sec + "초";
}

const button = document.getElementById("start-btn");
button.textContent = "금연시작";
let btnToggle = "start";
button.addEventListener("click", () => {
  if (btnToggle === "start") {
    timeId = setInterval(timerStart, 1000);
    button.textContent = "금연중단";
    btnToggle = "end";
  } else if (btnToggle === "end") {
    clearInterval(timeId);
    button.textContent = "금연시작";
    btnToggle = "start";
  }
});
