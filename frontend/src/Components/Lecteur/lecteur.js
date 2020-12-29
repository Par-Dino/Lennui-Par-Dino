const lecteur = () => {

var elsoundplay = document.getElementById("btn_play");
elsoundplay.addEventListener("click", playAudio);

var elsoundpause = document.getElementById("btn_pause");
elsoundpause.addEventListener("click", pauseAudio);


var x = document.getElementById("sound");
x.volume = 0.5;

function playAudio() {
    x.play();
    }

function pauseAudio() {
    x.pause();
}
}

export default lecteur