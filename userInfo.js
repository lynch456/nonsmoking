const inputInfo = document.getElementById("info-input");
const userInfo = document.getElementById("user-info");
const chooseDate = document.getElementById("current-date");
const chooseTime = document.getElementById("current-time");
const chooseDateValue = document.getElementById("dateValue");
const startButton = document.getElementById("start-btn");

startButton.textContent = "금연시작";

inputInfo.addEventListener("click", () => {
  userInfo.classList.remove("hide");
});
startButton.addEventListener("click", () => {
  timeId = setInterval(timerStart, 10);
  moneyId = setInterval(moneyCounting, 10);
  numberId = setInterval(numberCounting, 10);
  userInfo.classList.add("hide");
});
