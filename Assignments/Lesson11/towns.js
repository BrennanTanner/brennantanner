const requestURL =
   "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject["towns"];


      let i = 6;
   while(i != -1){
   
   let cards = document.createElement("div");
   let text = document.createElement("section");
   let name = document.createElement("h1");
   let motto = document.createElement('p');
   let yearFounded = document.createElement('h3');
   let currentPopulation = document.createElement('h3');
   let averageRainfall = document.createElement('h3');
   let photo = document.createElement("section");
   let image = document.createElement('img');

   cards.setAttribute("class", "cards" + [i]);
   text.setAttribute("class", "cardData"+ [i]);
   photo.setAttribute("class", "cardPhoto"+ [i]);

   name.textContent = towns[i].name;
   motto.textContent = towns[i].motto;
   yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
   currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
   averageRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
   image.src = "images/" + towns[i].photo; 

   text.appendChild(name);
   text.appendChild(motto);
   text.appendChild(yearFounded);
   text.appendChild(currentPopulation);
   text.appendChild(averageRainfall);
   photo.appendChild(image);

   document.querySelector("div.cardSection").appendChild(cards);
   document.querySelector("div.cards"+ [i]).appendChild(text);
   document.querySelector("div.cards"+ [i]).appendChild(photo);



   if (i==6) {
      i=0;
      // document.querySelector(".photos").appendChild(image);

   }
   else if (i==0) {
      i=2;
   }
   else {
      i=-1;
   }
}
   });
