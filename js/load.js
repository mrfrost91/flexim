function loadJson() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', "http://127.0.0.1:8080/items/", true);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var jsonText = JSON.parse(xhr.response);
            var text="";
            var i;
            for (i=0; i < jsonText.length; ++i) {
                text = "<h3>" + jsonText[i].id + ". " + jsonText[i].name + "</h3>";
                document.getElementsByClassName("heroname")[i].innerHTML = text;
            }
        }
    };
    xhr.send();
};
window.onload = loadJson;
