function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let hanoiElement = document.querySelector("#hanoi");
  let hanoiDateElement = hanoiElement.querySelector(".date");
  let hanoiTimeElement = hanoiElement.querySelector(".time");
  let hanoiTime = moment().tz("Asia/Saigon");

  hanoiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  hanoiTimeElement.innerHTML = hanoiTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
