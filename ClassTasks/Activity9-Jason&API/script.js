const url = 'https://randomuser.me/api/'

function getPerson(){
    let date = new Date()
    let time = date.getMilliseconds();
    
fetch(url)
.then(response => {
    return response.json();
})
.then(response => {
    let info = response.results[0];


    let card = document.createElement('section');
    let fullname = document.createElement('h2');
    let image = document.createElement('img');
    let gender = document.createElement('p');
    let email = document.createElement('p');
    let password = document.createElement('p');
    let cityCountry = document.createElement('p');
    let dob = document.createElement('p');
    let timeTaken = document.createElement('p');

   
    image.src = info.picture.large;
    fullname.textContent = info.name.first + " " + info.name.last;
    gender.textContent = info.gender;
    email.textContent = "Email: " + info.email;
    password.textContent = "Password: " + info.login.password;
    cityCountry.textContent = "Location: " + info.location.city + ", " + info.location.country;
    dob.textContent = `Date of Birth: ${info.dob.date.slice(0, 10)}, Age: ${info.dob.age}`;
    

    card.appendChild(image);
    card.appendChild(fullname);
    card.appendChild(gender);
    card.appendChild(email);
    card.appendChild(password);
    card.appendChild(cityCountry);
    card.appendChild(dob);
    card.appendChild(timeTaken);

    document.querySelector('div.cards').appendChild(card);
    
    let finalDate = new Date()
    let finalTime = finalDate.getMilliseconds();

    let totalTime = finalTime - time;
    timeTaken.textContent = `Time Taken to Load: ${totalTime} Miliseconds`;

    if (info.gender == "female"){
       card.style.backgroundColor = "#FFC0CB";
    }
    else {
      card.style.backgroundColor = "#8ecae6" 
    }
})
}
// Picture
// Full Name
// Gender
// Email
// Password
// City and Country
// Birth Month
// Birth Year
// The time in took JavaScript to retrieve the user and display it on the page

document.addEventListener('load', getPerson());
document.querySelector('#btn').addEventListener('click', getPerson);