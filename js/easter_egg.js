function easter_egg() {
    var change_img = document.getElementById('vlastelin').src = 'img/heroes/vlastelin.png';
    var snd = document.getElementsByTagName("audio")[0];
    snd.play();
    var sf_text = document.getElementsByTagName("H3")[4].innerHTML;
    document.getElementsByTagName("H3")[4].innerHTML = sf_text + ' Властелин';
    document.getElementById("vlastelin").onclick = " ";
    document.getElementsByClassName("values")[4].innerHTML = "<div>9999</div><div>9999</div><div>9999</div>";
};