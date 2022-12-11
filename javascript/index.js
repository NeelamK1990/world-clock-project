function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let hanoiElement = document.querySelector("#hanoi");
  if (hanoiElement) {
    let hanoiDateElement = hanoiElement.querySelector(".date");
    let hanoiTimeElement = hanoiElement.querySelector(".time");
    let hanoiTime = moment().tz("Asia/Saigon");

    hanoiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    hanoiTimeElement.innerHTML = hanoiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss "
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");

citiesSelect.addEventListener("change", changeCity);
