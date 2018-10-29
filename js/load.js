var xhr = new XMLHttpRequest();

function loadJson() {
    xhr.overrideMimeType("application/json");
    xhr.open('GET', "http://127.0.0.1:8080/items/", true);
    xhr.onreadystatechange = getJson;
    xhr.send();
}

function getJson() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var jsonArray = JSON.parse(xhr.response);
        var jsonText, jsonLength, i;
        jsonLength = jsonArray.length;
        for (i = 0; i < jsonLength; ++i) {
            jsonText = "<h3>" + jsonArray[i].id + ". " + jsonArray[i].name + "</h3>";
            document.getElementsByClassName("heroname")[i].innerHTML = jsonText;
        }
    }
}


window.onload = loadJson;
