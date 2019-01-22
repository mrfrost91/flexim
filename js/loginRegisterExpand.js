var loginIcon = document.getElementsByClassName("loginicon")[0].getElementsByTagName("a")[0];
var loginForm = document.getElementsByClassName("logincontainer")[0];
var searchIcon = document.getElementsByClassName("searchicon")[0].getElementsByTagName("a")[0];
var searchForm = document.getElementsByClassName("searchcontainer")[0];
var n = 0;
var i = 0;
loginIcon.onclick = function () {
    if (n % 2 === 0) {
        loginForm.style = "margin: 0 0 0 -192px;";
        searchForm.style = "margin: -49px 0 0 -246px;";
        n++;
        i = 0;
    } else {
        loginForm.style = "margin: -254px 0 0 -192px;";
        n = 0;
    }
};

searchIcon.onclick = function () {
    if (i % 2 === 0) {
        searchForm.style = "margin: 0 0 0 -246px;";
        loginForm.style = "margin: -254px 0 0 -192px;";
        i++;
        n = 0;
    } else {
        searchForm.style = "margin: -49px 0 0 -246px;";
        i = 0;
    }
};
