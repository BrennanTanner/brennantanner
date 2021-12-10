var url_string = window.location;
var url = new URL(url_string);
var showid = url.searchParams.get("id");

const requestURL =
   "https://api.themoviedb.org/3/tv/" +
   showid +
   "?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US";

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject); // temporary checking for valid response and data parsing
      const results = jsonObject;
      const epNum = jsonObject["number_of_episodes"];
      const epLength = jsonObject["episode_run_time"];

      let poster = document.createElement("section");
      let info = document.createElement("section");
      let title = document.createElement("h1");
      let tag = document.createElement("h3");
      let airdt = document.createElement("h4");
      let wt = document.createElement("h4");
      let image = document.createElement("img");
      let overview = document.createElement("p");
      let sNm = document.createElement("h4");

      console.log(epLength);
      var num = epNum * epLength[0];
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);

      if (epLength.length == 0) {
         wt.textContent = "Insufficient Data";
      } else {
         wt.textContent =
            "Total watch time: " +
            rhours +
            " hours and " +
            rminutes +
            " minutes";
      }
      info.appendChild(wt);
      //add data to elements
      title.textContent = results.name + " ";
      airdt.textContent = "Status: " + results.status;
      tag.textContent = results.tagline;
      overview.textContent = results.overview;
      sNm.textContent =
         "Seasons: " +
         results.number_of_seasons +
         " | Episodes: " +
         results.number_of_episodes;

      if (results.poster_path == null) {
         imageurl = "images/Image-Placeholder.svg";
      } else {
         imageurl =
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
            results.poster_path;
      }

      image.src = imageurl;
      title.id = "title";

      //append card
      info.appendChild(title);
      info.appendChild(tag);
      info.appendChild(overview);
      info.appendChild(sNm);
      info.appendChild(wt);
      info.appendChild(airdt);
      poster.appendChild(image);

      document.getElementById("information").appendChild(info);
      document.getElementById("information").appendChild(poster);

      //
      //
      //part 2
      //
      //

      for (let i = 1; i < results.number_of_seasons + 1; i++) {
         const requestURL2 =
            "https://api.themoviedb.org/3/tv/" +
            showid +
            "/season/" +
            i +
            "?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b&language=en-US";

         fetch(requestURL2)
            .then(function (response) {
               return response.json();
            })
            .then(function (jsonObject) {
               console.table(jsonObject); // temporary checking for valid response and data parsing
               const results = jsonObject;

               const epname = [];
               const epoverview = [];
               const eprating =[];
            
               let table = document.createElement("table");
               let info = document.createElement("tr");
               let title = document.createElement("h1");
               let sImage = document.createElement("img");
               let episodeImage = document.createElement("td");
               let episodeTitle = document.createElement("td");
               let epinfo = document.createElement("td");

               //add data to elements
               title.textContent = results.name + " ";

               if (results.poster_path == null) {
                  imageurl = "images/Image-Placeholder.svg";
               } else {
                  imageurl =
                     "https://www.themoviedb.org/t/p/w600_and_h900_bestv2" +
                     results.poster_path;
               }

               info.id = "seasonInfo";
               epinfo.id = "episodeInfo";
               sImage.src = imageurl;
               sImage.id = "seasonImg";

               //append card

               for (let x = 0; x < results.episodes.length; x++) {
               
                  epname[x] = document.createElement("h4");
                  epoverview[x] = document.createElement("p");
                  eprating[x] = document.createElement("p");
                  let divider = document.createElement("h2");


                  divider.textContent = "══════════════════";

                  epname[x].textContent = results.episodes[x].name;
                  eprating[x].textContent = "IMDB user rating: " + results.episodes[x].vote_average;
                  epoverview[x].textContent = results.episodes[x].overview;

                  
                  epinfo.appendChild(epname[x]);
                  epinfo.appendChild(eprating[x]);
                  epinfo.appendChild(epoverview[x]);
                  epinfo.appendChild(divider);

               }

               table.appendChild(sImage);
               episodeTitle.appendChild(title);

               info.appendChild(episodeImage);
               info.appendChild(episodeTitle);
               info.appendChild(epinfo);

               
               
               table.appendChild(info);
               document.getElementById("seasons").appendChild(table);
            });
      }
   });

// const requestURLprovider = "https://api.themoviedb.org/3/tv/"+ results[i].id+ "/watch/providers?api_key=8f1e70e82efeefd9c20bf8c8ffeaee9b";

// fetch(requestURLprovider)
// .then(function (response) {
//    return response.json();
// })
// .then(function (jsonObject) {
//    console.table(jsonObject); // temporary checking for valid response and data parsing
//    const provider = jsonObject["results"];

// });
