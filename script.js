let css         = document.querySelector("h3");
let color1      = document.querySelector(".color1");
let color2      = document.querySelector(".color2");
let body        = document.querySelector("#gradient");
let button      = document.querySelector("button");

function randomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomize(){
    body.style.background = "linear-gradient(to right, " + randomColor() + ", " + randomColor() + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomize);