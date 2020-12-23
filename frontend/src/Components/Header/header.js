const header=()=>{

var eldec = document.getElementById("btn_deco");
eldec.addEventListener("click", decobtn);

var elpro = document.getElementById("btn_profil");
elpro.addEventListener("click", profilbtn);


function profilbtn() {
    document.location.href="/Profil"
}

function decobtn() {
    sessionStorage.clear();
    document.location.href="/"
}

}

export default header;