document.querySelector('#popular').style.backgroundColor = "#FFCF2D";
document.querySelector('#pricing').style.fontSize = "1.8em";

document.querySelector('#column').style.opacity = 0;
document.querySelector('#column-2').style.opacity = 0;
document.querySelector('#column-3').style.opacity = 0;

setTimeout(function() {
    document.querySelector('#column').style.opacity = 1;
    document.querySelector('#column').style.transition = 'opacity 2s'; 
}, 1000);

setTimeout(function() {
    document.querySelector('#column-2').style.opacity = 1;
    document.querySelector('#column-2').style.transition = 'opacity 2s'; 
}, 3000);

setTimeout(function() {
    document.querySelector('#column-3').style.opacity = 1;
    document.querySelector('#column-3').style.transition = 'opacity 2s'; 
}, 2000);

function popup() {
    if (alert("you signed up!")) {   
    }
}