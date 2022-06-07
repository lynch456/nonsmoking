const currentDate = document.getElementById("date");
const menuToggle = document.getElementById("menu-bar");
let newDate = new Date();
let date = [newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()];

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
  if (sec > 59) {
    min++;
    timerMin.textContent = min > 9 ? min + "분" : "0" + min + "분";
    sec = 0;
    timerSec.textContent = "00초";
  } else if (min > 59) {
    hour++;
    timerHour.textContent = hour > 9 ? hour + "시간" : "0" + hour + "시간";
    min = 0;
    timerMin.textContent = "00분";
  } else if (hour >= 24 && hour % 24 === 0) {
    day + 1;
    day > 9 ? day + "일" : "0" + day + "일";
    hour = 0;
    timerHour.textContent = "00시간";
  }
}

const numberCount = document.getElementById("number");
const moneyCount = document.getElementById("money");

numberCount.textContent = "0개비";
moneyCount.textContent = "0원";

let money = 0;
let number = 0;
let moneyId;
let numberId;
function moneyCounting() {
  money += pricePack.value / 86400;
  moneyCount.textContent = `${money.toFixed(1)}원`;
}

function numberCounting() {
  number += pieceSmoke.value / 86400;
  numberCount.textContent = `${number.toFixed(1)}개비`;
}
const endButton = document.getElementById("end-btn");

endButton.textContent = "금연종료";

endButton.addEventListener("click", () => {
  clearInterval(timeId);
  clearInterval(moneyId);
  clearInterval(numberId);
  clearInterval(progressId);
  day = 0;
  hour = 0;
  min = 0;
  sec = 0;
  money = 0;
  number = 0;
  gageBar.value = "0";
  timerDay.textContent = "00일";
  timerHour.textContent = "00시간";
  timerMin.textContent = "00분";
  timerSec.textContent = "00초";
  numberCount.textContent = "0개비";
  moneyCount.textContent = "0원";
});
