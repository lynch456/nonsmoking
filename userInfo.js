const chooseDate = document.getElementById("current-date");
const chooseTime = document.getElementById("current-time");

let toDay = new Date();
let newDay = new Date(toDay);

chooseDate.innerHTML = newDay;
chooseTime.innerHTML = "";
