const gageBar = document.getElementsByClassName("gage");
let progressId;
function progress() {
  document.getElementById("twentyGage").value += (1 * 100) / 1200;
  document.getElementById("twoHourGage").value += (1 * 100) / 7200;
  document.getElementById("eightHourGage").value += (1 * 100) / 28800;
  document.getElementById("dayGage").value += (1 * 100) / 86400;
  document.getElementById("twoDayGage").value += (1 * 100) / 172800;
  document.getElementById("fourDayGage").value += (1 * 100) / 345600;
  document.getElementById("weekGage").value += (1 * 100) / 604800;
  document.getElementById("monthGage").value += (1 * 100) / 2.628e6;
  document.getElementById("threeMonthGage").value += (1 * 100) / 7.884e6;
  document.getElementById("sixMonthGage").value += (1 * 100) / 1.577e7;
  document.getElementById("yearGage").value += (1 * 100) / 3.154e7;
  document.getElementById("fiveYearGage").value += (1 * 100) / 1.577e8;
  document.getElementById("tenYearGage").value += (1 * 100) / 3.154e8;
  document.getElementById("fifteenthYearGage").value += (1 * 100) / 4.73e8;
}
