var logoimg = document.getElementById("logoimg");
var dokalogo = document.getElementsByClassName("dokalogo")[0];
dokalogo.addEventListener("mouseover", mouseOver);
dokalogo.addEventListener("mouseout", mouseOut);

function mouseOver() {
    logoimg.src = "img/dota_logo_hover.png";
}

function mouseOut() {
    logoimg.src = "img/dota_logo.png";
}

var loginIcon = document.getElementsByClassName("icons")[0].getElementsByTagName("a")[0];
var loginForm = document.getElementsByClassName("logincontainer")[0];
var searchIcon = document.getElementsByClassName("icons")[0].getElementsByTagName("a")[1];
var searchForm = document.getElementsByClassName("searchcontainer")[0];
var n = 0;
var i = 0;
loginIcon.onclick = function () {
    if (n % 2 === 0) {
        loginForm.style = "display: block";
        searchForm.style = "display: none";
        n++;
        i = 0;
        console.log(n);
    } else {
        loginForm.style = "display: none";
        n = 0;
    }
};

searchIcon.onclick = function () {
    if (i % 2 === 0) {
        searchForm.style = "display: block";
        loginForm.style = "display: none";
        i++;
        n = 0;
        console.log(i);
    } else {
        searchForm.style = "display: none";
        i = 0;
    }
};

var move_up = document.getElementById("button_move_up");
window.onscroll = function showMoveTop() {
    if (window.pageYOffset > 0) {
        move_up.style = "display: block";
    } else {
        move_up.style = "display: none;";
    }
};

function moveTop() {
    window.scrollTo(0, 0);
}
