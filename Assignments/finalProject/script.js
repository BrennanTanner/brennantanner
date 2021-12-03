// use the URL to find search query
var url_string = window.location;
var url = new URL(url_string);
var search = url.searchParams.get("search");

const requestURL =
   "https://api.themoviedb.org/3/search/tv?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US&query=" +
   search;

   if (search != null){
fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const shows = jsonObject["total_results"];
      const results = jsonObject["results"];

      for (let i = 0; i < shows; i++) {
         // create elements
         let card = document.createElement("section");
         let link = document.createElement("a");
         let title = document.createElement("h2");
         let info = document.createElement("p");
         let wt = document.createElement("p");
         let image = document.createElement("img");

         // get info on individual objects
         const requestURL2 =
            "https://api.themoviedb.org/3/tv/" +
            results[i].id +
            "?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US";

         fetch(requestURL2)
            .then(function (response) {
               return response.json();
            })
            .then(function (jsonObject) {
               console.table(jsonObject); // temporary checking for valid response and data parsing
               const epNum = jsonObject["number_of_episodes"];
               const epLength = jsonObject["episode_run_time"];

               console.log(epLength);
               var num = epNum*epLength[0];
               var hours = num / 60;
               var rhours = Math.floor(hours);
               var minutes = (hours - rhours) * 60;
               var rminutes = Math.round(minutes);

               if(epLength.length == 0) {
                  wt.textContent = "Insufficient Data";
               }
               else {
               wt.textContent =
                  "Total watch time: " + rhours +
                  " hours and " +
                  rminutes +
                  " minutes";}
               card.appendChild(wt);
            });

         //add data to elements
         title.textContent = results[i].name;
         info.textContent = "First Aired: " + results[i].first_air_date;

         if (results[i].poster_path == null){
            imageurl = "images/Image-Placeholder.svg";
         }
         else { imageurl =
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
            results[i].poster_path;}


         image.src = imageurl;
         link.href = "show.html?id=" + results[i].id;

         //append card
         card.appendChild(link);
         link.appendChild(title);
         link.appendChild(info);
         link.appendChild(image);

         document.getElementById("search-results").appendChild(card);
      }
   })};

   const requestURL3 =
   "https://api.themoviedb.org/3/tv/popular?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US&page=1";

fetch(requestURL3)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const shows = jsonObject["total_results"];
      const results = jsonObject["results"];

      for (let i = 0; i < shows; i++) {
      let card = document.createElement("section");
      let link = document.createElement("a");
      let title = document.createElement("h2");
      let info = document.createElement("p");
      let image = document.createElement("img");

         //add data to elements
         title.textContent = results[i].name;
         info.textContent = "First Aired: " + results[i].first_air_date;

         if (results[i].poster_path == null){
            imageurl = "images/Image-Placeholder.svg";
         }
         else { imageurl =
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
            results[i].poster_path;}


         image.src = imageurl;
         link.href = "show.html?id=" + results[i].id;

         //append card
         card.appendChild(link);
         link.appendChild(title);
         link.appendChild(info);
         link.appendChild(image);

         document.getElementById("popular").appendChild(card);
      }
      });

      const requestURL4 =
      "https://api.themoviedb.org/3/tv/airing_today?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US&page=1";
   
   fetch(requestURL4)
      .then(function (response) {
         return response.json();
      })
      .then(function (jsonObject) {
         console.table(jsonObject); // temporary checking for valid response and data parsing
         const shows = jsonObject["total_results"];
         const results = jsonObject["results"];
   
         for (let i = 0; i < shows; i++) {
         let card = document.createElement("section");
         let link = document.createElement("a");
         let title = document.createElement("h2");
         let info = document.createElement("p");
         let image = document.createElement("img");
   
            //add data to elements
            title.textContent = results[i].name;
            info.textContent = "First Aired: " + results[i].first_air_date;
   
            if (results[i].poster_path == null){
               imageurl = "images/Image-Placeholder.svg";
            }
            else { imageurl =
               "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
               results[i].poster_path;}
   
   
            image.src = imageurl;
            link.href = "show.html?id=" + results[i].id;

            //append card
            card.appendChild(link);
            link.appendChild(title);
            link.appendChild(info);
            link.appendChild(image);
   
            document.getElementById("latest").appendChild(card);
         }
         });