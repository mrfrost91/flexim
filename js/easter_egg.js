function black() {
    var snd = document.getElementsByTagName("audio")[0];
    snd.play();
    var sf_text = document.getElementsByTagName("H3")[4].innerHTML;
    document.getElementsByTagName("H3")[4].innerHTML = sf_text + ' Властелин';
    document.getElementById("vlastelin").onclick = " ";
    document.getElementsByClassName("values")[4].innerHTML = "<div>9999</div><div>9999</div><div>9999</div>";
    document.getElementById('vlastelin').src = 'img/heroes/vlastelin.png';
}

function toasty() {
    var word = "toasty";
    var num_char = 0;
    document.onkeypress = function match_char (e) {
        var key_pressed = e.key;
        if (key_pressed === word.charAt(num_char)) {
            num_char++;
        } else {
            num_char = 0;
        }
        if (num_char === word.length) {
            var snd = document.getElementsByTagName("audio")[1];
            snd.play();
        }
    }

}

window.onkeypress = toasty();