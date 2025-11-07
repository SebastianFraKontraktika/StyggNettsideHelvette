var intervalIDFc = window.setInterval(changeFont, 10);
var intervalIDBg = window.setInterval(changeBg, 10);
let head = document.getElementById("head");
let para = document.getElementById("para");
var intervalIDFf = window.setInterval(changeFontType, 1000);

function changeFont() {
    head.style.fontSize = Math.random() * 5 + "rem";
    para.style.fontSize = Math.random() * 5 + "rem";
    let randomNum = Math.round(Math.random() * 5);
    if (randomNum == 0) {
        head.style.color = "#4deeea";
        para.style.color = "#4deeea";
    }
    else if (randomNum == 1) {
        head.style.color = "#ffe700";
        para.style.color = "#ffe700";
    }
    else if (randomNum == 2) {
        head.style.color = "#74ee15";
        para.style.color = "#74ee15";
    }
    else if (randomNum == 2) {
        head.style.color = "white";
        para.style.color = "white";
    }
    else {
        head.style.color = "#f000ff";
        para.style.color = "#f000ff";
    }
}
function changeBg() {
    let randomNum = Math.round(Math.random() * 4);
    if (randomNum == 0) {
        document.body.style.backgroundColor = "#4deeea";
    }
    else if (randomNum == 1) {
        document.body.style.backgroundColor = "#ffe700";
    }
    else if (randomNum == 2) {
        document.body.style.backgroundColor = "#74ee15";
    }
    else {
        document.body.style.backgroundColor = "#f000ff";
    }
}
function changeFontType() {
    let randomNum = Math.round(Math.random() * 2);
    if (randomNum == 0) {
        head.style.fontFamily = "Comic Sans MS"
        para.style.fontFamily = "WingDings, snas-serif"
    }
    else if (randomNum == 1) {
        head.style.fontFamily = "Jokerman, sans-serif"
        para.style.fontFamily = "Comic Sans MS"
    } 
    else {
        head.style.fontFamily = "WingDings, snas-serif"
        para.style.fontFamily = "Jokerman, sans-serif"
    }
}