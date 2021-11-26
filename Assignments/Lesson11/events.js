const requestURL =
   "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject["towns"];
  let i = 0;
      let page = document.getElementById("pageTitle").innerHTML;
if (page == "Preston"){
   i = 6;
}
 else if (page == "Fish Haven"){
    i = 2;
 }

 else {}
 
       let event0 = document.createElement("p");
       let event1 = document.createElement("p");
       let event2 = document.createElement("p");
      let todayElem = document.querySelector("#events");

      
      event0.textContent = `${towns[i].events[0]}`;
      todayElem.appendChild(event0);

      event1.textContent = `${towns[i].events[1]}`;
      todayElem.appendChild(event1);

      event2.textContent = `${towns[i].events[2]}`;
      todayElem.appendChild(event2);
 });
