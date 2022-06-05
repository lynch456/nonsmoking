const inputInfo = document.getElementById("info-input");
const userInfo = document.getElementById("user-info");
const chooseDate = document.getElementById("current-date");
const chooseTime = document.getElementById("current-time");
const chooseDateValue = document.getElementById("dateValue");
const startButton = document.getElementById("start-btn");
const modalClose = document.getElementById("close-btn");

const pricePack = document.getElementById("pack").value;
const pieceSmoke = document.getElementById("piece").value;

let priceValue = pricePack;

const charge = document.getElementById("asdf");
charge.addEventListener("click", () => {
  console.log(priceValue);
});

startButton.textContent = "금연시작";

inputInfo.addEventListener("click", () => {
  userInfo.classList.remove("hide");
});
startButton.addEventListener("click", () => {
  timeId = setInterval(timerStart, 500);
  moneyId = setInterval(moneyCounting, 500);
  numberId = setInterval(numberCounting, 500);
  userInfo.classList.add("hide");
});
modalClose.addEventListener("click", () => {
  userInfo.classList.add("hide");
});
