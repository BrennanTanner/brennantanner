let displayText = '';
async function newJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
    .then(response => response.json())
    .then(data => displayText = data.joke);
    let dadDiv = document.querySelector('#dad-joke');
    dadDiv.innerHTML = displayText;
    console.log(displayText.length)

    if (displayText.length > 80) {
        dadDiv.setAttribute('style', 'font-size:25px;');
    } else {
        dadDiv.setAttribute('style', 'font-size:40px;');
    }

  }

