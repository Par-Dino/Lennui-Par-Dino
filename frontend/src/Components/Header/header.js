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
}

export default header;