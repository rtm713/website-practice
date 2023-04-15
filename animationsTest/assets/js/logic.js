
var titleBox = document.querySelector('#headDiv');
var fadeInOne = document.querySelector('#fade-in-one');
var titleLetters = ["W","e","l","c","o","m","e"];
var stop = 0;

var titleAnimation = setInterval(function() {
    var letter = document.createElement('h1');
    letter.textContent = titleLetters[stop];
    titleBox.append(letter);
    stop++;

    if (stop === titleLetters.length) {
        clearInterval(titleAnimation);
    };
},200);
