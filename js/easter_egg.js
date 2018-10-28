function black() {
    var snd = document.getElementsByTagName("audio")[0];
    snd.play();
    document.getElementsByTagName("H3")[4].innerText += " Властелин";
    document.getElementById("vlastelin").removeAttribute("onclick");
    document.getElementsByClassName("values")[4].innerHTML = "<div>9999</div><div>9999</div><div>9999</div>";
    document.getElementById('vlastelin').src = "img/heroes/vlastelin.png";
}

function toasty() {
    var word = ["toasty", "ещфыен"];
    var num_char = 0;
    document.onkeypress = function match_char(e) {
        var key_char = e.key;
        if (key_char === word[0].charAt(num_char) || (key_char === word[1].charAt(num_char))) {
            num_char++;
        } else {
            num_char = 0;
        }
        if (num_char === word[0].length) {
            var snd = document.getElementsByTagName("audio")[1];
            snd.play();
            num_char = 0;
        }
    }

}

window.onkeypress = toasty();