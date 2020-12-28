const header = () => {
    var elhom = document.getElementById("btn_home");
    elhom.addEventListener("click", homebtn);

    var eldec = document.getElementById("btn_deco");
    eldec.addEventListener("click", decobtn);

    var elpro = document.getElementById("btn_profil");
    elpro.addEventListener("click", profilbtn);

    function homebtn() {
        document.location.href = "/Homepage"
    }

    function profilbtn() {
        document.location.href = "/Profil"
    }

    function decobtn() {
        sessionStorage.clear();
        document.location.href = "/"
    }

///



    var elsoundplay = document.getElementById("btn_play");
    elsoundplay.addEventListener("click", playAudio);

    var elsoundpause = document.getElementById("btn_pause");
    elsoundpause.addEventListener("click", pauseAudio);

    
    var x = document.getElementById("sound");
    x.volume = 0.5;
    function playAudio() {
        // document.getElementById('btn_play').id = "btn_pause"; 
        x.play();
        }

    function pauseAudio() {
        // document.getElementById('btn_pause').id = "btn_play"; 
        x.pause();
    }

}


export default header;