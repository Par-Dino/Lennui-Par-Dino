const URL="http://localhost:8081/auth/signin";  //url da la route de la requete en back


const fetchie=()=>{ //instancier le js en react
  document.getElementById("submit").addEventListener('click',(e)=>{ //evenement au click sur le bouton 
    e.preventDefault();
  const user={   // creation d un objet avec mes données a envoyer
    username: document.querySelector("#username").value, //email-> req.body.email
    password: document.querySelector("#password").value //attention a nommer comme en back
  }

const Formjson=JSON.stringify(user); // Transformation en String

const config = { //configuration fetch
    method: 'POST', //envoyer
    headers: {  //autorisation
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json", //j'envoie du json
    "Access-Control-Allow-Origin":"http://localhost:8081/auth/signin", //j autorise a aller sur mon back
    },
    body: Formjson,// j'envoie dans le back body ==req.body
  } 
  

  fetch(URL, config) //instancier la fetch
  .then(response => { //après que la fetch est faite je fais :
    response.json().then(json => { //transformation de la reponse en json
        if (json==="password invalide!"){ //gestion erreur
          console.log("wrong password")
        }
        if (json==="user non trouver."){
            console.log("User not found")
        }
        if(json===undefined)
        {console.log('pb')}
        else{
      const token=json.accessToken;
      const username=json.username;
      const id=json.id;
      const email=json.email;
      const progress=json.progress;
      const death=json.death;

      sessionStorage.setItem("Token",json.accessToken)
      sessionStorage.setItem("Username",json.username)
      sessionStorage.setItem("Id",json.id)
      sessionStorage.setItem("Email",json.email)
      sessionStorage.setItem("Progress",json.progress)
      sessionStorage.setItem("Death",json.death)

      document.location.href="/Homepage"
        }
  })})
 
}) 

}
  


export default fetchie;