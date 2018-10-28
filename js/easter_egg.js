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
    const matchWord = (word, callback) => {
        let matched = 0;
        const onKeyPress = e => {
            // convert the keycode to the character
            const char = String.fromCharCode(e.which);
            // check if the current character is the expected character
            if (word.charAt(matched) === char) {
                // move on to the next character
                matched++
            } else {
                // reset the counter
                matched = 0
            }
            if (matched === word.length) {
                callback(e, word);
                matched = 0
            }
        };
        window.addEventListener('keypress', onKeyPress, true)
    };

    matchWord('toasty', (e, word) => {
        var snd = document.getElementsByTagName("audio")[1];
        snd.play();
    })
}
window.onkeypress = toasty();