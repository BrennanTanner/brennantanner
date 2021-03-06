const url =
   "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=fe45cf9c6541f48a0068b1289e22e489";

const url2 =
   "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=fe45cf9c6541f48a0068b1289e22e489";

const dofW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = new Date();
var time = today.getHours();
console.log(time);

fetch(url2)
   .then((response) => {
      return response.json();
   })
   .then((weatherObjct) => {
      cDay(weatherObjct);
      console.log(weatherObjct);
   });

function cDay(weatherObjct) {
   let weatherData = weatherObjct;

   let dt = new Date(today);
   let cDay = document.createElement("h3");
   cDay.textContent = dofW[dt.getDay()];

   let current = document.createElement("h4");
   current.textContent = ` ${weatherData.weather[0].description}`;

   let cTemp = document.createElement("p");
   cTemp.textContent = `Temperature: ${weatherData.main.temp}° F`;

   let cWeather = document.createElement("img");
   let imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0].icon +
      ".png";
   cWeather.setAttribute("src", imagesrc);
   cWeather.setAttribute("alt", weatherData.weather[0].description);

   let cFeels = document.createElement("p");
   cFeels.textContent = `Feels like: ${weatherData.main.feels_like}° F`;

   let tempHigh = document.createElement("p");
   tempHigh.textContent = `Today's High: ${weatherData.main.temp_max}° F`;

   let tempLow = document.createElement("p");
   tempLow.textContent = `Today's Low: ${weatherData.main.temp_min}° F`;

   let humid = document.createElement("p");
   humid.textContent = `Humidity: ${weatherData.main.humidity}%`;

   let wSpeed = document.createElement("p");
   wSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} mph`;

   let wChill = document.createElement("p");
   wChill.textContent = `Wind Chill: ${weatherData.wind.deg}° F`;
   let todayElem = document.querySelector("#today");

   todayElem.appendChild(cDay);
   todayElem.appendChild(current);
   todayElem.appendChild(cWeather);
   todayElem.appendChild(cTemp);
   todayElem.appendChild(cFeels);
   todayElem.appendChild(tempHigh);
   todayElem.appendChild(tempLow);
   todayElem.appendChild(humid);
   todayElem.appendChild(wSpeed);
   todayElem.appendChild(wChill);
}

fetch(url)
   .then((response) => {
      return response.json();
   })
   .then((fweatherObjct) => {
      fiveDay(fweatherObjct);
      console.log(fweatherObjct);
   });
function fiveDay(fweatherObjct) {
   const forecast = fweatherObjct.list;
   const size = forecast.length;
   const fiveDayElem = document.querySelector("#fiveDay");
   let fiveDayList = [...fiveDayElem.children];

   let i2 = 0;
   for (let i = 0; i < size; i++) {
      if (forecast[i].dt_txt.includes("18:00:00")) {
         let highTempElem = document.createElement("p");
         highTempElem.textContent = `High: ${forecast[i].main.temp_max}° F`;

         let lowTempElem = document.createElement("p");
         lowTempElem.textContent = `Low: ${forecast[i].main.temp_min}° F`;

         let windElem = document.createElement("p");
         windElem.textContent = `Wind: ${forecast[i].wind.speed} mph`;

         let fiveWeather = document.createElement("img");
         let imagesrc =
            "https://openweathermap.org/img/w/" +
            forecast[i].weather[0].icon +
            ".png";
         fiveWeather.setAttribute("src", imagesrc);
         fiveWeather.setAttribute("alt", forecast[i].weather[0].description);

         let dt = new Date(forecast[i].dt_txt);
         let dayElem = document.createElement("h3");
         dayElem.textContent = dofW[dt.getDay()];

         fiveDayList[i2].appendChild(dayElem);
         fiveDayList[i2].appendChild(highTempElem);
         fiveDayList[i2].appendChild(windElem);
         fiveDayList[i2].appendChild(fiveWeather);

         i2++;
      }
   }
}
